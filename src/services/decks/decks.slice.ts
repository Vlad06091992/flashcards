import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const initialState = {
  minCardsCount: 0,
  maxCardsCount: 100,
  name: '',
  authorId: '',
  orderBy: 'name-asc',
  currentPage: 1,
  itemsPerPage: 10,
  cardsAuthor: 'allCards',
}
export const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    setItemsPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setDeckName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setCardsAuthor: (state, action: PayloadAction<string>) => {
      state.cardsAuthor = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setMinCardsCount: (state, action: PayloadAction<number>) => {
      state.minCardsCount = action.payload
    },
    setMaxCardsCount: (state, action: PayloadAction<number>) => {
      state.maxCardsCount = action.payload
    },
    setOrderBy: (state, action: PayloadAction<string>) => {
      state.orderBy = action.payload
    },
    resetState: () => {
      return initialState
    },
  },
})

console.log(decksSlice)

export const {
  setDeckName,
  setMinCardsCount,
  setMaxCardsCount,
  setItemsPerPage,
  setCardsAuthor,
  setCurrentPage,
  setOrderBy,
  resetState,
} = decksSlice.actions
