import { useGetDecksQuery } from '@/services/base-api.ts'

export const Decks = () => {
  const { data: decks } = useGetDecksQuery()

  console.log(decks)

  return <div>decks</div>
}
