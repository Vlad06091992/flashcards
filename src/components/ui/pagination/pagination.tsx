import { ItemPagination } from '@/components/ui/pagination/item-pagination/item-pagination.tsx'

type Props = {
  pagesQuality: number
  activePage: number
}

export const Pagination = ({ pagesQuality, activePage }: Props) => {
  // types
  // component="div"
  // count={100}
  // page={page}
  // onPageChange={handleChangePage}
  // rowsPerPage={rowsPerPage}
  // onRowsPerPageChange={handleChangeRowsPerPage}

  let pages = []

  for (let i = 0; i <= pagesQuality; i++) {
    pages.push(i)
  }

  return (
    <div>
      {pages.map(el => {
        return <ItemPagination isActive={el === activePage} pageNumber={el} />
      })}
    </div>
  )
}
