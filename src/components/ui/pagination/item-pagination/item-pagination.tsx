import s from './item-pagination.module.scss'

type Props = {
  pageNumber: number
  isActive: boolean
  onClick: any
}

export const ItemPagination = ({ onClick, pageNumber, isActive }: Props) => {
  return (
    <div onClick={() => onClick()} className={`${s.itemPagination} ${isActive ? s.active : ''}`}>
      {pageNumber}
    </div>
  )
}
