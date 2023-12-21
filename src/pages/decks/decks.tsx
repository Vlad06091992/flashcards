import s from './decks.module.scss'

import { Arrow } from '@/assets'
import Basket from '@/assets/icons/basket.tsx'
import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TabSwitcher,
  Textfield,
  Typography,
} from '@/components'
import { CustomSlider } from '@/components/ui/slider'
import { FetchingSpinner } from '@/pages/common/spinners'
import { useDeckOptions } from '@/pages/decks/hooks/useDecksOptions.ts'
import { Deck } from '@/services/decks/types.ts'

export const Decks = () => {
  const {
    itemsPerPage,
    currentPage,
    orderBy,
    setDeckName,
    setItemsPerPage,
    setMaxCardsCount,
    setMinCardsCount,
    maxCardsCount,
    minCardsCount,
    setCurrentPage,
    setCardsAuthor,
    tabs,
    totalPages,
    data,
    dispatch,
    resetState,
    isFetching,
    sortHandler,
  } = useDeckOptions()

  const TableSettings = (
    <div className={s.searchSettings}>
      <Textfield
        placeholder={'Input search'}
        onChange={event => {
          dispatch(setDeckName(event.currentTarget.value))
        }}
        className={s.searchInput}
        variant={'search'}
      />
      <TabSwitcher
        tabs={tabs}
        onValueChange={value => {
          dispatch(setCardsAuthor(value))
        }}
        label={'Show packs cards'}
      />
      <CustomSlider
        label={'Number of cards'}
        values={[minCardsCount, maxCardsCount]}
        onValueCommit={() => {}}
        onValueChange={values => {
          dispatch(setMinCardsCount(values[0]))
          dispatch(setMaxCardsCount(values[1]))
        }}
      />
      <Button onClick={() => dispatch(resetState())} variant={'secondary'}>
        <Basket />
        Clear Filter
      </Button>
    </div>
  )
  const TableMain = (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            <span onClick={() => sortHandler('name')}>Name</span>
            <Arrow className={`${s.arrow} ${orderBy === `name-desc` ? `${s.arrowDown}` : ''} `} />
          </TableHeadCell>
          <TableHeadCell>
            <span onClick={() => sortHandler('cardsCount')}>Cards</span>
            <Arrow
              className={`${s.arrow} ${orderBy === `cardsCount-desc` ? `${s.arrowDown}` : ''} `}
            />
          </TableHeadCell>
          <TableHeadCell>
            {' '}
            <span onClick={() => sortHandler('updated')}>Last Updated</span>
            <Arrow
              className={`${s.arrow} ${orderBy === `updated-desc` ? `${s.arrowDown}` : ''} `}
            />
          </TableHeadCell>
          <TableHeadCell>
            {' '}
            <span onClick={() => sortHandler('created')}>Created By</span>
            <Arrow
              className={`${s.arrow} ${orderBy === `created-desc` ? `${s.arrowDown}` : ''} `}
            />
          </TableHeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data?.items.map((deck: Deck) => {
          return (
            <TableRow key={deck.id}>
              <TableCell>{deck.name}</TableCell>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>{deck.updated}</TableCell>
              <TableCell>{deck.author.name}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
  const TitleAndAddButton = (
    <div className={s.titleAndButton}>
      <Typography variant={'large'}>Packs List</Typography>
      <Button>Add new pack</Button>
    </div>
  )

  return (
    <div>
      <FetchingSpinner loading={isFetching} isMain={true} />
      {TitleAndAddButton}
      {TableSettings}
      {TableMain}
      <div className={s.paginationContainer}>
        <Pagination
          count={totalPages || 1}
          page={currentPage}
          onChange={value => {
            dispatch(setCurrentPage(value))
          }}
          perPage={itemsPerPage}
          onPerPageChange={value => {
            dispatch(setItemsPerPage(value))
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

// <Button disabled={isLoading} onClick={() => createDeck({ name: '123' })}>
//     {' '}
//     create deck
// </Button>
// <Textfield
//     value={search}
//     onChange={e => {
//         setSearch(e.currentTarget.value)
//     }}
// />
// <Button onClick={() => setItemsPerPage(10)}> 10</Button>
// <Button onClick={() => setItemsPerPage(20)}> 20</Button>
// <Button onClick={() => setItemsPerPage(30)}> 30</Button>

// import s from './decks.module.scss'
//
// import { Arrow } from '@/assets'
// import Basket from '@/assets/icons/basket.tsx'
// import { useDebounce } from '@/common/hooks/useDebounce.ts'
// import {
//   Button,
//   Pagination,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeadCell,
//   TableRow,
//   TabSwitcher,
//   TabType,
//   Textfield,
//   Typography,
// } from '@/components'
// import { CustomSlider } from '@/components/ui/slider'
// import { FetchingSpinner } from '@/pages/common/spinners'
// import {
//   setCardsAuthor,
//   setCurrentPage,
//   setDeckName,
//   setItemsPerPage,
//   setMaxCardsCount,
//   setMinCardsCount,
//   setOrderBy,
//   resetState,
// } from '@/services/decks/decks.slice.ts'
// import { useGetDecksQuery } from '@/services/decks/decks.ts'
// import { Deck } from '@/services/decks/types.ts'
// import { useAppDispatch, useAppSelector } from '@/services/store.ts'
//
// export const Decks = () => {
//   const { currentPage, itemsPerPage, name, minCardsCount, maxCardsCount, orderBy } = useAppSelector(
//     state => state.decks
//   )
//
//   const { data, isFetching } = useGetDecksQuery({
//     itemsPerPage,
//     name: useDebounce(name, 1000),
//     currentPage,
//     maxCardsCount: useDebounce(maxCardsCount, 1000),
//     minCardsCount: useDebounce(minCardsCount, 1000),
//     orderBy,
//   })
//
//   const totalPages = data?.pagination?.totalPages
//   const dispatch = useAppDispatch()
//   const tabs: TabType[] = [
//     { value: 'allCards', title: 'All Cards', disabled: false },
//     { value: 'myCards', title: 'My Cards', disabled: false },
//   ]
//
//   const sortHandler = (field: string) => {
//     orderBy === `${field}-asc`
//       ? dispatch(setOrderBy(`${field}-desc`))
//       : dispatch(setOrderBy(`${field}-asc`))
//   }
//
//   const TableSettings = (
//     <div className={s.searchSettings}>
//       <Textfield
//         placeholder={'Input search'}
//         onChange={event => {
//           dispatch(setDeckName(event.currentTarget.value))
//         }}
//         className={s.searchInput}
//         variant={'search'}
//       />
//       <TabSwitcher
//         tabs={tabs}
//         onValueChange={value => {
//           dispatch(setCardsAuthor(value))
//         }}
//         label={'Show packs cards'}
//       />
//       <CustomSlider
//         label={'Number of cards'}
//         values={[minCardsCount, maxCardsCount]}
//         onValueCommit={() => {}}
//         onValueChange={values => {
//           dispatch(setMinCardsCount(values[0]))
//           dispatch(setMaxCardsCount(values[1]))
//         }}
//       />
//       <Button onClick={() => dispatch(resetState())} variant={'secondary'}>
//         <Basket />
//         Clear Filter
//       </Button>
//     </div>
//   )
//   const TableMain = (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableHeadCell>
//             <span onClick={() => sortHandler('name')}>Name</span>
//             <Arrow className={`${s.arrow} ${orderBy === `name-desc` ? `${s.arrowDown}` : ''} `} />
//           </TableHeadCell>
//           <TableHeadCell>
//             <span onClick={() => sortHandler('cardsCount')}>Cards</span>
//             <Arrow
//               className={`${s.arrow} ${orderBy === `cardsCount-desc` ? `${s.arrowDown}` : ''} `}
//             />
//           </TableHeadCell>
//           <TableHeadCell>
//             {' '}
//             <span onClick={() => sortHandler('updated')}>Last Updated</span>
//             <Arrow
//               className={`${s.arrow} ${orderBy === `updated-desc` ? `${s.arrowDown}` : ''} `}
//             />
//           </TableHeadCell>
//           <TableHeadCell>
//             {' '}
//             <span onClick={() => sortHandler('created')}>Created By</span>
//             <Arrow
//               className={`${s.arrow} ${orderBy === `created-desc` ? `${s.arrowDown}` : ''} `}
//             />
//           </TableHeadCell>
//         </TableRow>
//       </TableHead>
//
//       <TableBody>
//         {data?.items.map((deck: Deck) => {
//           return (
//             <TableRow key={deck.id}>
//               <TableCell>{deck.name}</TableCell>
//               <TableCell>{deck.cardsCount}</TableCell>
//               <TableCell>{deck.updated}</TableCell>
//               <TableCell>{deck.author.name}</TableCell>
//             </TableRow>
//           )
//         })}
//       </TableBody>
//     </Table>
//   )
//   const TitleAndAddButton = (
//     <div className={s.titleAndButton}>
//       <Typography variant={'large'}>Packs List</Typography>
//       <Button>Add new pack</Button>
//     </div>
//   )
//
//   return (
//     <div>
//       <FetchingSpinner loading={isFetching} isMain={true} />
//       {TitleAndAddButton}
//       {TableSettings}
//       {TableMain}
//       <div className={s.paginationContainer}>
//         <Pagination
//           count={totalPages || 1}
//           page={currentPage}
//           onChange={value => {
//             dispatch(setCurrentPage(value))
//           }}
//           perPage={itemsPerPage}
//           onPerPageChange={value => {
//             dispatch(setItemsPerPage(value))
//           }}
//           perPageOptions={[
//             { value: 10, label: '10' },
//             { value: 20, label: '20' },
//             { value: 50, label: '50' },
//             { value: 100, label: '100' },
//           ]}
//         />
//       </div>
//     </div>
//   )
// }
//
// // <Button disabled={isLoading} onClick={() => createDeck({ name: '123' })}>
// //     {' '}
// //     create deck
// // </Button>
// // <Textfield
// //     value={search}
// //     onChange={e => {
// //         setSearch(e.currentTarget.value)
// //     }}
// // />
// // <Button onClick={() => setItemsPerPage(10)}> 10</Button>
// // <Button onClick={() => setItemsPerPage(20)}> 20</Button>
// // <Button onClick={() => setItemsPerPage(30)}> 30</Button>
