import s from './item-pagination.module.scss'

type Props = {
  pageNumber: number
  isActive: boolean
}

export const ItemPagination = ({ pageNumber, isActive }: Props) => {
  return <div className={`${s.itemPagination} ${isActive ? s.active : ''}`}>{pageNumber}</div>
}
