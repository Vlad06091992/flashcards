import { useState } from 'react'

import s from './pagination.module.scss'

import { Typography, Selected } from '@/components'
import { ItemPagination } from '@/components/ui/pagination/item-pagination/item-pagination.tsx'
import { NextButton } from '@/components/ui/pagination/item-pagination/pagination-components/NextButton.tsx'
import { PrevButton } from '@/components/ui/pagination/item-pagination/pagination-components/PrevButton.tsx'

type Props = {
  count: number
  page: number
  onChange: (page: number) => void
}

export const Pagination = ({ count, page, onChange }: Props) => {
  // types
  // component="div"
  // count={100}
  // page={page}
  // onPageChange={handleChangePage}
  // rowsPerPage={rowsPerPage}
  // onRowsPerPageChange={handleChangeRowsPerPage}

  const paginationTtems = [
    { value: '10', label: '10' },
    { value: '20', label: '20' },
    { value: '30', label: '30' },
    { value: '50', label: '50' },
    { value: '100', label: '100' },
  ]

  const [activePage, setActivePage] = useState(page || 1)

  const itemOnClickHandler = (page: number) => {
    setActivePage(page)
    onChange(page)
  }

  return (
    <div className={s.pagination}>
      <PrevButton
        disabled={activePage === 1}
        onclickCallback={() => {
          setActivePage(activePage - 1)
          onChange(activePage - 1)
        }}
      />

      <ItemPagination
        onClick={() => itemOnClickHandler(1)}
        isActive={1 === activePage}
        pageNumber={1}
      />

      <MainPaginationButtons
        itemOnClickHandler={itemOnClickHandler}
        setActivePage={setActivePage}
        pagesQuality={count}
        activePage={activePage}
      />

      <ItemPagination
        onClick={() => itemOnClickHandler(count)}
        isActive={count === activePage}
        pageNumber={count}
      />

      <NextButton
        disabled={activePage === count}
        onclickCallback={() => {
          setActivePage(activePage + 1)
          onChange(activePage + 1)
        }}
      />

      <Typography className={s.paginationTypography} color={'white'} variant={'body2'}>
        Показать
      </Typography>
      <Selected variant={'pagination'} items={paginationTtems}></Selected>
      <Typography color={'white'} variant={'body2'}>
        на странице
      </Typography>
    </div>
  )
}

type PropsPaginationNumbers = {
  pagesQuality: number
  activePage: number
  setActivePage: any
  itemOnClickHandler: (page: number) => void
}

const MainPaginationButtons = ({
  pagesQuality,
  activePage,
  itemOnClickHandler,
}: PropsPaginationNumbers) => {
  let pages: Array<number> = []

  if (pagesQuality <= 6) {
    for (let i = 2; i < pagesQuality; i++) {
      pages.push(i)
    }

    return (
      <div className={s.pagination}>
        {pages.map(el => {
          return (
            <ItemPagination
              key={el}
              onClick={() => itemOnClickHandler(el)}
              isActive={el === activePage}
              pageNumber={el}
            />
          )
        })}
      </div>
    )
  } else {
    for (let i = activePage - 5; i < activePage + 6; i++) {
      pages.push(i)
    }

    return (
      <div className={s.pagination}>
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
          if (
            (activePage < 5 && el > 1 && el < 6) ||
            (el > 2 && el < pagesQuality && index > 2 && index < 7) ||
            (activePage > pagesQuality - 4 && el < pagesQuality && el > pagesQuality - 6)
          ) {
            return (
              <ItemPagination
                key={el}
                onClick={() => itemOnClickHandler(el)}
                isActive={el === activePage}
                pageNumber={el}
              />
            )
          }
        })}
      </div>
    )
  }
}
