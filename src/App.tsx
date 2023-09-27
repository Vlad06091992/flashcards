import { SelectDemo } from '@/components/ui/select/select.tsx'

const items = [
  { value: 'Banana', label: 'Banana' },
  { value: 'Apple', label: 'Apple' },
  { value: 'Orange', label: 'Orange' },
]

export function App() {
  return (
    <div>
      <SelectDemo items={items} />
    </div>
    // <Provider store={store}>
    //   <Router />
    // </Provider>
  )
}
