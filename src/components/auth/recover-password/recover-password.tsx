import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import s from './recover-password.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'
import { useRecoverPasswordMutation } from '@/services/auth/auth.ts'

const schema = z.object({
  email: z.string().email().default(''),
})

type FormType = z.infer<typeof schema> & {
  html: string
  subject: string
}
// type Props = {
//   onSubmit: (data: FormType) => void
// }
// export const RecoverPassword = ({ onSubmit }: Props) => {
export const RecoverPassword = () => {
  const [recoverPassword] = useRecoverPasswordMutation()
  const navigate = useNavigate()
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  const onSubmitHandler = (data: FormType) => {
    debugger

    const requestData: FormType = {
      html: '<h1>Hi, ##name##</h1><p>Click <a href="http://127.0.0.1:5173/set-new-password\\##token##\\">here</a> to recover your password</p>',
      subject: 'Vlad',
      email: data.email,
    }

    recoverPassword(requestData)
      .unwrap()
      .then(() => {
        navigate('/check-email')
      })
  }

  return (
    <Card className={s.card}>
      <Typography color={'white'} variant={'large'}>
        Forgot your password?
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
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
          <Button fullWidth={true} className={s.button} type={'submit'}>
            Send Instructions
          </Button>
        </div>
      </form>
      <Typography className={s.caption} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Typography className={s.signUpLink} as={Link} to={'/login'} variant={'link2'}>
        Try logging in
      </Typography>
    </Card>
  )
}
