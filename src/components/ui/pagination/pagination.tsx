import { useState } from 'react'

import { LeftChevron, RightChevron } from '@/assets'
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

  const [activePageState, setActivePage] = useState(activePage || 1)

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <LeftChevron
        onClick={() => {
          setActivePage(activePageState - 1)
        }}
      />

      <ItemPagination
        onClick={() => setActivePage(1)}
        isActive={1 === activePageState}
        pageNumber={1}
      />

      <PaginationNumbers
        setActivePage={setActivePage}
        pagesQuality={pagesQuality}
        activePage={activePageState}
      />

      <ItemPagination
        onClick={() => setActivePage(pagesQuality)}
        isActive={pagesQuality === activePageState}
        pageNumber={pagesQuality}
      />

      <RightChevron
        onClick={() => {
          setActivePage(activePageState + 1)
        }}
      />
    </div>
  )
}

type PropsPaginationNumbers = {
  pagesQuality: number
  activePage: number
  setActivePage: any
}

const PaginationNumbers = ({ pagesQuality, activePage, setActivePage }: PropsPaginationNumbers) => {
  let pages: Array<number> = []

  for (let i = activePage - 5; i < activePage + 6; i++) {
    pages.push(i)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {pages.map((el, index) => {
        if (
          (index == 3 && activePage <= pagesQuality - 3 && activePage > 4) ||
          (activePage > pagesQuality - 3 && index === pages.indexOf(pagesQuality - 5)) ||
          (index == 10 && activePage < pagesQuality - 3)
        ) {
          return (
            <div key={el} style={{ width: '24px', height: '24px' }}>
              ...
            </div>
          )
        }

        if (activePage < 5 && el > 1 && el < 6) {
          return (
            <ItemPagination
              key={el}
              onClick={() => setActivePage(el)}
              isActive={el === activePage}
              pageNumber={el}
            />
          )
        } else if (el > 2 && el < pagesQuality && index > 2 && index < 7) {
          // if (el == 7) debugger

          {
            return (
              <ItemPagination
                key={el}
                onClick={() => setActivePage(el)}
                isActive={el === activePage}
                pageNumber={el}
              />
            )
          }
        } else if (activePage > pagesQuality - 4 && el < pagesQuality && el > pagesQuality - 6)
          return (
            <ItemPagination
              key={el}
              onClick={() => setActivePage(el)}
              isActive={el === activePage}
              pageNumber={el}
            />
          )
      })}
    </div>
  )
}
