import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '@/services/base-api.ts'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
// console.log(store.getState())

let state = store.getState()

console.log(state)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
