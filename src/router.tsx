import {
  createBrowserRouter,
  Outlet,
  RouteObject,
  RouterProvider,
  Navigate,
} from 'react-router-dom'

import { Decks } from '@/pages/decks.tsx'

const PrivateRoutes = () => {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <div>login</div>,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/decks',
    element: <Decks />,
  },
]

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },

  ...publicRoutes,
])

export const Router = () => {
  return <RouterProvider router={router} />
}
