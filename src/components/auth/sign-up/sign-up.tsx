import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './sign-up.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

const Schema = z.object({
  email: z.string().email().default(''),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
  confirmPassword: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
})

type FormType = z.infer<typeof Schema>

export const SignUp = () => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(Schema),
  })

  return (
    <Card className={s.card}>
      <Typography color={'white'} variant={'large'}>
        Sign up
      </Typography>
      <div className={s.form}>
        <ControlledTextfield control={control} name={'email'} label={'Email'} />
        <ControlledTextfield
          variant={'visible'}
          control={control}
          name={'password'}
          type={'password'}
          label={'Password'}
        />
        <ControlledTextfield
          variant={'visible'}
          control={control}
          name={'confirmPassword'}
          type={'password'}
          label={'Confirm Password'}
        />
      </div>
      <Button fullWidth={true} className={s.button}>
        Sign up
      </Button>
      <Typography className={s.caption} as={'div'} variant={'body2'}>
        Already have an account ?
      </Typography>
      <Typography className={s.signUpLink} as={'div'} variant={'link2'}>
        Sign in
      </Typography>
    </Card>
  )
}
