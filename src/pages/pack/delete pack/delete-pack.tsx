import s from './cards.modals.module.scss'

import { Close } from '@/assets'
import { Button, Card, Typography } from '@/components'

type Props = {
  cancelCallback: () => void
  deleteCardCallback: (arg?: any) => void
  closeCallback: () => void
}

export const DeletePack = ({ deleteCardCallback, closeCallback, cancelCallback }: Props) => {
  const onSubmit = () => {
    deleteCardCallback()
  }

  return (
    <Card className={s.card}>
      <form onSubmit={onSubmit}>
        <div className={s.deleteForm}>
          <div className={s.formHeader}>
            <Typography color={'white'} variant={'h2'}>
              Edit Pack
            </Typography>
            <Close className={s.closeIcon} onClick={closeCallback} />
          </div>
          <div className={s.line}></div>
          <Typography variant={'subtitle1'} className={s.description}>
            Do you really want to remove Pack Name?
            <br /> All cards will be deleted.
          </Typography>
          <div className={s.buttons}>
            <Button type={'button'} onClick={cancelCallback} variant={'secondary'}>
              Cancel
            </Button>
            <Button type={'submit'}>Delete Pack</Button>
          </div>
        </div>
      </form>
    </Card>
  )
}
