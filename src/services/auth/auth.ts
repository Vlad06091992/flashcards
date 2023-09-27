import { FormType } from '@/components'
import { baseApi } from '@/services/base-api.ts'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      logIn: builder.mutation<any, FormType>({
        query: body => {
          return {
            url: '/v1/auth/login',
            method: 'POST',
            body,
          }
        },
        invalidatesTags: ['Decks'],
      }),
      signUp: builder.mutation<any, any>({
        query: params => ({
          url: `v1/auth/sign-up`,
          method: 'POST',
          body: params ?? {},
        }),
        // providesTags: ['Auth'],
      }),
      resetPassword: builder.mutation<any, any>({
        query: params => {
          debugger

          return {
            url: `v1/auth/reset-password/${params.token}`,
            method: 'POST',
            body: { password: params.password },
          }
        },
        // providesTags: ['Auth'],
      }),
      recoverPassword: builder.mutation<any, any>({
        query: params => ({
          url: `v1/auth/recover-password`,
          method: 'POST',
          body: params,
        }),
        // providesTags: ['Auth'],
      }),
    }
  },
})

export const {
  useLogInMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useRecoverPasswordMutation,
} = authApi
