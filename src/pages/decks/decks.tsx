import { useState } from 'react'

import { Input } from '@hookform/devtools/dist/styled'

import s from './decks.module.scss'

import Basket from '@/assets/icons/basket.tsx'
import {
  Textfield,
  Button,
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
  Typography,
  TabSwitcher,
  TabType,
} from '@/components'
import { CustomSlider } from '@/components/ui/slider'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.ts'
import { Deck } from '@/services/decks/types.ts'

export const Decks = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')

  const decks = useGetDecksQuery({ itemsPerPage, name: search })
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  const tabs: TabType[] = [
    { value: 'allCards', title: 'All Cards', disabled: false },
    { value: 'myCards', title: 'My Cards', disabled: false },
  ]

  return (
    <div>
      <div className={s.titleAndButton}>
        <Typography variant={'large'}>Packs List</Typography>
        <Button>Add new pack</Button>
      </div>
      <div className={s.searchSettings}>
        <Textfield placeholder={'Input search'} className={s.searchInput} variant={'search'} />
        <TabSwitcher tabs={tabs} label={'Show packs cards'} />
        <CustomSlider
          label={'Number of cards'}
          values={[1, 60]}
          onValueCommit={() => {}}
          onValueChange={() => {}}
        />
        <Button variant={'secondary'}>
          <Basket />
          Clear Filter
        </Button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Cards</TableHeadCell>
            <TableHeadCell>Last Updated</TableHeadCell>
            <TableHeadCell>Created by</TableHeadCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {decks.data?.items.map((deck: Deck) => {
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
