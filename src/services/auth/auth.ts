import { FormTypeSignIn } from '@/components'
import { baseApi } from '@/services/base-api.ts'

export const authApi = baseApi.injectEndpoints({
  endpoints: builder => {
    return {
      authMe: builder.query<any, void>({
        query: body => {
          return {
            url: '/v1/auth/me',
            method: 'GET',
            body,
          }
        },
        providesTags: ['Me'],
      }),

      logIn: builder.mutation<any, FormTypeSignIn>({
        query: body => {
          return {
            url: '/v1/auth/login',
            method: 'POST',
            body,
          }
        },
        invalidatesTags: ['Me'],
      }),
      updateMe: builder.mutation<any, any>({
        query: body => {
          console.log(body)

          return {
            url: '/v1/auth/me',
            method: 'PATCH',
            body,
          }
        },
        invalidatesTags: ['Me'],
      }),
      logout: builder.mutation<any, void>({
        query: () => {
          return {
            url: '/v1/auth/logout',
            method: 'POST',
            body: {},
          }
        },
        invalidatesTags: ['Me'],
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
  useUpdateMeMutation,
  useAuthMeQuery,
  useLogoutMutation,
  useLogInMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useRecoverPasswordMutation,
} = authApi
