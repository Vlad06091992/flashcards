import { memo } from 'react'

import { Arrow } from '@/assets'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '@/components'
import s from '@/pages/decks/decks.module.scss'
import { useDeckOptions } from '@/pages/decks/hooks/useDecksOptions.ts'
import { Deck } from '@/services/decks/types.ts'

export const TableMain = memo(() => {
  console.log('render table')
  const { sortHandler, orderBy, data } = useDeckOptions()

  console.log(data)

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
              <TableCell className={s.nameColumn}>
                {deck.cover && (
                  <div>
                    <img className={s.image} src={deck.cover} />
                  </div>
                )}
                <div>{deck.name}</div>
              </TableCell>
              <TableCell>{deck.cardsCount}</TableCell>
              <TableCell>{deck.updated}</TableCell>
              <TableCell>{deck.author.name}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
})
