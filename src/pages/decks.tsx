import { useState } from 'react'

import {
  Textfield,
  Button,
  Table,
  TableHead,
  TableRow,
  TableHeadCell,
  TableBody,
  TableCell,
} from '@/components'
import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.ts'
import { Deck } from '@/services/decks/types.ts'

export const Decks = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [search, setSearch] = useState('')

  const decks = useGetDecksQuery({ itemsPerPage, name: search })
  const [createDeck, { isLoading }] = useCreateDeckMutation()

  return (
    <div>
      <Button disabled={isLoading} onClick={() => createDeck({ name: '123' })}>
        {' '}
        create deck
      </Button>
      <Textfield
        value={search}
        onChange={e => {
          setSearch(e.currentTarget.value)
        }}
      />
      <Button onClick={() => setItemsPerPage(10)}> 10</Button>
      <Button onClick={() => setItemsPerPage(20)}> 20</Button>
      <Button onClick={() => setItemsPerPage(30)}> 30</Button>

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
