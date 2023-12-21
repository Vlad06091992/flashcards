import { Button, Typography } from '@/components'
import s from '@/pages/decks/decks.module.scss'

export const TitleAndAddButton = () => {
  return (
    <div className={s.titleAndButton}>
      <Typography variant={'large'}>Packs List</Typography>
      <Button>Add new pack</Button>
    </div>
  )
}
