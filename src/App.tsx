import { Selected } from '@/components/ui/selected/selected.tsx'

const items = [
  { value: 'Banana', label: 'Select-box' },
  { value: 'Apple', label: 'Select-box' },
  { value: 'Orange', label: 'Select-box' },
]

export function App() {
  return (
    <div style={{ margin: '10px' }}>
      <Selected label={'Select-box'} items={items} />
    </div>
    // <Provider store={store}>
    //   <Router />
    // </Provider>
  )
}
