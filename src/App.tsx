import { CheckboxComponent } from '../src/components/checkbox/checkbox.tsx'
import { CheckboxExample } from '../src/components/checkboxExample/checkboxExample'

//Input, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

function App() {
  return (
    <div style={{ margin: '20px' }}>
      <CheckboxComponent defaultChecked={true} disabled={false} />
    </div>
  )
}

export default App
