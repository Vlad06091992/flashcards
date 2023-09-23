import { baseApi } from '@/services/base-api.ts'
import { DecksParams, DecksResponse } from '@/services/decks/types.ts'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, DecksParams>({
        query: params => ({
          url: `v1/decks`,
          method: 'GET',
          params: params ?? {},
        }),
        providesTags: ['Decks'],
      }),

      createDeck: builder.mutation<any, { name: string }>({
        query: body => ({
          url: `v1/decks`,
          method: 'POST',
          body,
        }),
        invalidatesTags: ['Decks'],
      }),
    }
  },
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
