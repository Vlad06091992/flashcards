import s from './cards.modals.module.scss'

import { Close } from '@/assets'
import { Button, Card, Typography } from '@/components'

type Props = {
  cancelCallback: () => void
  deleteCardCallback: (arg?: any) => void
  closeCallback: () => void
  title: string
  target: string
  entities: string
}

export const DeleteEntity = ({
  deleteCardCallback,
  closeCallback,
  cancelCallback,
  title,
  target,
  entities,
}: Props) => {
  return (
    <Card className={s.card}>
      <div className={s.deleteForm}>
        <div className={s.formHeader}>
          <Typography color={'white'} variant={'h2'}>
            {title}
          </Typography>
          <Close className={s.closeIcon} onClick={closeCallback} />
        </div>
        <div className={s.line}></div>
        <Typography variant={'subtitle1'} className={s.description}>
          Do you really want to remove {target}?
          <br /> All {entities} will be deleted.
        </Typography>
        <div className={s.buttons}>
          <Button type={'button'} onClick={cancelCallback} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={deleteCardCallback}>Delete Pack</Button>
        </div>
      </div>
    </Card>
  )
}
