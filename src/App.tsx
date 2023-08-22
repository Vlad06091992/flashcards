//Input, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import { Input } from './components/input/input.tsx'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Input placeholder={'Input'} disabled={true} variant={'visible'} />
    </div>
  )
}

export default App
