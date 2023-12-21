import { Arrow } from '@/assets'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/components'
import s from '@/pages/decks/decks.module.scss'
import { useDeckOptions } from '@/pages/decks/hooks/useDecksOptions.ts'
import { Deck } from '@/services/decks/types.ts'

export const TableMain = () => {
  const { sortHandler, orderBy, data } = useDeckOptions()

  return (
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
}
