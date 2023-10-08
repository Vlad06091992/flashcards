import { Provider } from 'react-redux'

import { Pagination } from '@/components'
import { Selected } from '@/components/ui/selected/selected.tsx'
import { Router } from '@/router.tsx'
import { store } from '@/services/store.ts'

const items = [
  { value: 'Banana', label: 'Select-box' },
  { value: 'Apple', label: 'Select-box' },
  { value: 'Orange', label: 'Select-box' },
]

export function App() {
  return (
    // <div style={{ margin: '10px' }}>
    //   <Selected label={'Select-box'} items={items} />
    // </div>

    <div style={{ margin: '10px' }}>
      <Pagination activePage={2} pagesQuality={55} />
    </div>

    // <Provider store={store}>
    //   <Router />
    // </Provider>
  )
}
