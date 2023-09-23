import { useCreateDeckMutation, useGetDecksQuery } from '@/services/decks/decks.ts'
import { Items } from '@/services/decks/types.ts'

export const Decks = () => {
  const decks = useGetDecksQuery({ itemsPerPage: '20' })
  const [createDeck] = useCreateDeckMutation()

  return (
    <div>
      <button onClick={() => createDeck({ name: '123' })}> create deck</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cards</th>
            <th>Last Updated</th>
            <th>Created by</th>
          </tr>
        </thead>

        <tbody>
          {decks.data?.items.map((deck: Items) => {
            return (
              <tr key={deck.id}>
                <td>{deck.name}</td>
                <td>{deck.cardsCount}</td>
                <td>{deck.updated}</td>
                <td>{deck.author.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
