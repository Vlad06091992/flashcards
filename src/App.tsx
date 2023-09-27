import { useEffect } from 'react'

import { Provider } from 'react-redux'

import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  useEffect(() => {}, [])

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
