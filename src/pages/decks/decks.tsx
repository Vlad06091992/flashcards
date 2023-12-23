import s from './decks.module.scss'

import { Pagination } from '@/components'
import { FetchingSpinner } from '@/pages/common/spinners'
import { useDeckOptions } from '@/pages/decks/hooks/useDecksOptions.ts'
import { TableMain } from '@/pages/decks/table-main.tsx'
import { TableSettings } from '@/pages/decks/table-settings.tsx'
import { TitleAndAddButton } from '@/pages/decks/title-button.tsx'

export const Decks = () => {
  const {
    itemsPerPage,
    currentPage,
    setItemsPerPage,
    setCurrentPage,
    totalPages,
    dispatch,
    isFetching,
  } = useDeckOptions()

  return (
    <div>
      <FetchingSpinner loading={isFetching} isMain={true} />
      <TitleAndAddButton />
      <TableSettings />
      <TableMain />
      <div className={s.paginationContainer}>
        <Pagination
          count={totalPages || 1}
          page={currentPage}
          onChange={value => {
            dispatch(setCurrentPage(value))
          }}
          perPage={itemsPerPage}
          onPerPageChange={value => {
            debugger
            dispatch(setItemsPerPage(value))
            dispatch(setCurrentPage(1))
          }}
          perPageOptions={[
            { value: 10, label: '10' },
            { value: 20, label: '20' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ]}
        />
      </div>
    </div>
  )
}
