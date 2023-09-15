import s from './check-email.module.scss'

import { Email } from '@/assets'
import { Button, Card, Typography } from '@/components'

export const CheckEmail = () => {
  return (
    <Card className={s.card}>
      <form>
        <Typography color={'white'} variant={'large'}>
          Check Email
        </Typography>
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
