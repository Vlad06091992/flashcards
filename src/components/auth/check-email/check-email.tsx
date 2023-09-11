import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './check-email.module.scss'

import Email from '@/assets/icons/email.tsx'
import { Button, Card, Typography } from '@/components'
import commonStyle from '@/components/auth/common-auth.module.scss'

const schema = z.object({
  email: z.string().email().default(''),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
  rememberMe: z.boolean().default(false).default(false),
})

type FormType = z.infer<typeof schema>

export const CheckEmail = () => {
  const { handleSubmit, control, formState } = useForm<FormType>({
    resolver: zodResolver(schema),
  })

  return (
    <Card className={commonStyle.common}>
      <Typography color={'white'} variant={'large'}>
        Check Email
      </Typography>
      <form>
        <div className={s.form}>
          <Email />
          <Typography className={s.instructions} variant={'body2'}>
            We’ve sent an Email with instructions to example@mail.com
          </Typography>
          <Button fullWidth={true} className={s.button}>
            Back to sign in
          </Button>
        </div>
      </form>
    </Card>
  )
}
