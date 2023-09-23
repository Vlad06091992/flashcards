import { baseApi } from '@/services/base-api.ts'

export const decksApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      getDecks: builder.query<any, void>({
        query: () => `v1/decks`,
        providesTags: ['Decks'],
      }),

      // createDeck: builder.mutation<any, { name: string }>({
      //   query: ({ name }) => ({
      //     url: `v1/decks`,
      //     method: 'POST',
      //     body: { name },
      //   }),
      // }),

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
