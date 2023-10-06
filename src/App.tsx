import { SelectDemo } from '@/components/ui/select/select.tsx'

const items = [
  { value: 'Banana', label: 'Select-box' },
  { value: 'Apple', label: 'Select-box' },
  { value: 'Orange', label: 'Select-box' },
]

export function App() {
  return (
    <div style={{ margin: '10px' }}>
      <SelectDemo label={'Select-box'} items={items} />
    </div>
    // <Provider store={store}>
    //   <Router />
    // </Provider>
  )
}
