import { Provider } from 'react-redux'

import { Decks } from '@/pages/decks.tsx'
import { Router } from '@/router'
import { store } from '@/services/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
      {/*<Decks />*/}
    </Provider>
  )
}
