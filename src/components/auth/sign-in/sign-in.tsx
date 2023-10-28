import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { z } from 'zod'

import s from './sign-in.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/ui/controlled'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'
import { useLogInMutation } from '@/services/auth/auth.ts'

const Schema = z.object({
  email: z.string().email().default(''),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
  rememberMe: z.boolean().default(false),
})

export type FormTypeSignIn = z.infer<typeof Schema>
// type Props = {
//   onSubmit: (data: FormType) => void
// }

// export const SignIn = ({ onSubmit }: Props) => {
export const SignIn = () => {
  const { handleSubmit, control, setError } = useForm<FormTypeSignIn>({
    resolver: zodResolver(Schema),
  })
  const navigate = useNavigate()
  const [loginfn, { error }] = useLogInMutation()

  console.log(error)
  if (error) {
    if (
      'status' in error &&
      typeof error.data == 'object' &&
      error.data &&
      'message' in error.data
    ) {
      console.log(error.data.message)
      setError('password', { type: 'custom', message: error.data?.message as string })
    }
  }

  const onSubmitHandler = (data: FormTypeSignIn) => {
    loginfn(data)
      .unwrap()
      .then(res => {
        console.log(res)
        navigate('/')
      })
  }

  return (
    <Card className={s.card}>
      <Typography color={'white'} variant={'large'}>
        Sign in
      </Typography>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
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

        <Typography
          as={Link}
          to={'/recover-password'}
          variant={'link1'}
          className={s.recoverPassword}
        >
          Forgot password ?
        </Typography>

        <Button fullWidth={true} className={s.button} type={'submit'}>
          Sign in
        </Button>
      </form>

      <Typography className={s.caption} as={'div'} variant={'body2'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account ?
      </Typography>
      <Typography className={s.signUpLink} as={Link} to={'/sign-up'} variant={'link2'}>
        Sign up
      </Typography>
    </Card>
  )
}
