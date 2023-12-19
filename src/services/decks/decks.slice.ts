import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    minCardsCount: 0,
    maxCardsCount: 10,
    name: '',
    authorId: '',
    orderBy: '',
    currentPage: 1,
    itemsPerPage: 10,
    cardsAuthor: 'allCards',
  },
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
} = decksSlice.actions
