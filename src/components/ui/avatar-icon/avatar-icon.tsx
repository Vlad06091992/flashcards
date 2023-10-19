import s from './avatar-icon.module.scss'

type Props = {
  imageUrl: string
}

export const AvatarIcon = ({ imageUrl }: Props) => {
  return (
    <div className={s.avaRoot}>
      <img src={imageUrl} alt={'avatar'} />
    </div>
  )
}
