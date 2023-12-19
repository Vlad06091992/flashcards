import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    minCardsCount: 1,
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
  },
})

console.log(decksSlice)

export const { setDeckName, setItemsPerPage, setCardsAuthor, setCurrentPage } = decksSlice.actions
