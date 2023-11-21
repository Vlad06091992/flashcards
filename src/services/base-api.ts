import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

let baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  credentials: 'include',
  // prepareHeaders: headers => {
  //   headers.append('x-auth-skip', 'true')
  // },
})

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Auth'],
  baseQuery: baseQuery,
  endpoints: () => ({}),
})
