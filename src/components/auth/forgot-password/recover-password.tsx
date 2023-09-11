import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './recover-password.module.scss'

import { Button, Card, Typography } from '@/components'
import commonStyle from '@/components/auth/common-auth.module.scss'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

const schema = z.object({
  email: z.string().email().default(''),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
  rememberMe: z.boolean().default(false).default(false),
})

type FormType = z.infer<typeof schema>

export const RecoverPassword = () => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  return (
    <Card className={commonStyle.common}>
      <Typography color={'white'} variant={'large'}>
        Forgot your password?
      </Typography>
      <form>
        <div className={s.form}>
          <ControlledTextfield
            className={s.email}
            control={control}
            name={'email'}
            label={'Email'}
          />
          <Typography className={s.instructions} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button fullWidth={true} className={s.button}>
            Send Instructions
          </Button>
        </div>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography className={s.signUpLink} as={'div'} variant={'link2'}>
        Try logging in
      </Typography>
    </Card>
  )
}
