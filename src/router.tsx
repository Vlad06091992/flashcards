import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from '@/layout/layout.tsx'
import { ErrorPage } from '@/pages'
import { CheckEmailPage } from '@/pages/check-email.page.tsx'
import { Decks } from '@/pages/decks.tsx'
import { NewPasswordPage } from '@/pages/new-password.tsx'
import { RecoverPasswordPage } from '@/pages/recover-password.tsx'
import { SignInPage } from '@/pages/sign-in.tsx'
import { SignUpPage } from '@/pages/sign-up.tsx'
import { useAuthMeQuery } from '@/services/auth/auth.ts'

const PrivateRoutes = () => {
  const { data, isLoading } = useAuthMeQuery()
  const isAuth = !!data

  if (isLoading) return <div>Loading....</div>
  console.log(data)
  if (isAuth) {
    return <Outlet />
  } else {
    return <Navigate to="/login" />
  }
}

let publicRoutes = [
  {
    path: '/login',
    element: <SignInPage />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/recover-password',
    element: <RecoverPasswordPage />,
  },
  {
    path: '/set-new-password/:token',
    element: <NewPasswordPage />,
  },
  {
    path: '/check-email',
    element: <CheckEmailPage />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
  },
]

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      ...publicRoutes,
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
