import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import commonStyle from '../auth/common-auth.module.scss'

import s from './sign-in.module.scss'

import { Button, Card, LoginFormType, Textfield, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/ui/controlled'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

const loginSchema = z.object({
  email: z.string().email().default(''),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
  rememberMe: z.boolean().default(false).default(false),
})

export const SignIn = () => {
  const { handleSubmit, control, formState } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={commonStyle.common}>
      <Typography color={'white'} variant={'large'}>
        Sign in
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
        <ControlledCheckbox
          className={s.checkbox}
          name={'rememberMe'}
          control={control}
          label={'Remember me'}
        />
      </div>

      <Button as={'a'} href={'#'} variant={'link'}>
        forgot password
      </Button>

      <Button
        style={{
          width: '348px',
          boxSizing: 'border-box',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        fullWidth={true}
        as={'button'}
      >
        Sign in
      </Button>
      <Typography style={{ color: 'gray' }} variant={'body2'}>
        Don't have an account ?
      </Typography>
      <Button style={{ color: 'blue' }} as={'a'} href={'#'} variant={'link'}>
        Sign up
      </Button>
    </Card>
  )
}
