import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import commonStyle from '../common-auth.module.scss'

import s from './create-new-password.module.scss'

import { Button, Card, Typography } from '@/components'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

const Schema = z.object({
  email: z.string().email().default(''),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
  rememberMe: z.boolean().default(false).default(false),
})

type FormType = z.infer<typeof Schema>

export const CreateNewPassword = () => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(Schema),
  })

  return (
    <Card className={commonStyle.common}>
      <Typography color={'white'} variant={'large'}>
        Create new password
      </Typography>
      <div className={s.form}>
        <ControlledTextfield
          className={s.email}
          variant={'visible'}
          control={control}
          name={'password'}
          type={'password'}
          label={'Password'}
        />
      </div>
      <Typography className={s.instructions} variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>

      <Button fullWidth={true} className={s.button}>
        Create New Password
      </Button>
    </Card>
  )
}
