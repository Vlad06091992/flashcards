import Basket from '@/assets/icons/basket.tsx'
import { Button, TabSwitcher, Textfield } from '@/components'
import { CustomSlider } from '@/components/ui/slider'
import s from '@/pages/decks/decks.module.scss'
import { useDeckOptions } from '@/pages/decks/hooks/useDecksOptions.ts'
import { useAuthMeQuery } from '@/services/auth/auth.ts'
import { setAuthorId } from '@/services/decks/decks.slice.ts'
import { useAppDispatch } from '@/services/store.ts'

export const TableSettings = () => {
  console.log('render table settings')
  const dispatch = useAppDispatch()
  const {
    cardsAuthor,
    authorId,
    name,
    minCardsCount,
    setDeckName,
    tabs,
    setCardsAuthor,
    maxCardsCount,
    setMinCardsCount,
    setMaxCardsCount,
    resetState,
  } = useDeckOptions()

  const {
    data: { id },
  } = useAuthMeQuery()

  return (
    <div className={s.searchSettings}>
      <Textfield
        value={name}
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
          console.log(cardsAuthor, authorId)
          cardsAuthor === 'allCards' ? dispatch(setAuthorId(id)) : dispatch(setAuthorId(''))
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
}
