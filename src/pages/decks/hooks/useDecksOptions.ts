import { useDebounce } from '@/common/hooks/useDebounce.ts'
import { TabType } from '@/components'
import {
  resetState,
  setCardsAuthor,
  setCurrentPage,
  setDeckName,
  setItemsPerPage,
  setMaxCardsCount,
  setMinCardsCount,
  setOrderBy,
} from '@/services/decks/decks.slice.ts'
import { useGetDecksQuery } from '@/services/decks/decks.ts'
import { useAppDispatch, useAppSelector } from '@/services/store.ts'

export const useDeckOptions = () => {
  const {
    currentPage,
    itemsPerPage,
    name,
    minCardsCount,
    maxCardsCount,
    orderBy,
    cardsAuthor,
    authorId,
  } = useAppSelector(state => state.decks)

  const { data, isFetching } = useGetDecksQuery({
    itemsPerPage,
    name: useDebounce(name, 1000),
    currentPage,
    maxCardsCount: useDebounce(maxCardsCount, 1000),
    minCardsCount: useDebounce(minCardsCount, 1000),
    orderBy,
    authorId,
  })

  const totalPages = data?.pagination?.totalPages
  const dispatch = useAppDispatch()
  const tabs: TabType[] = [
    { value: 'allCards', title: 'All Cards', disabled: false },
    { value: 'myCards', title: 'My Cards', disabled: false },
  ]

  const sortHandler = (field: string) => {
    orderBy === `${field}-asc`
      ? dispatch(setOrderBy(`${field}-desc`))
      : dispatch(setOrderBy(`${field}-asc`))
  }

  return {
    cardsAuthor,
    authorId,
    currentPage,
    itemsPerPage,
    totalPages,
    tabs,
    data,
    isFetching,
    name,
    minCardsCount,
    maxCardsCount,
    orderBy,
    dispatch,
    useDebounce,
    sortHandler,
    setCardsAuthor,
    setCurrentPage,
    setDeckName,
    setItemsPerPage,
    setMaxCardsCount,
    setMinCardsCount,
    setOrderBy,
    resetState,
  }
}
