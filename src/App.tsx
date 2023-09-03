//Input, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import { LoginForm, Typography, RadioGroup, RadioGroupDemo, RadioGroupDataType } from '@/components'

export const App = () => {
  const data: RadioGroupDataType[] = [
    { value: 'default', id: 'r1', label: 'default' },
    { value: 'comfortable', id: 'r2', label: 'comfortable' },
    { value: 'compact', id: 'r3', label: 'compact' },
  ]
  //

  const options = [
    { label: 'one', value: '1' },
    { label: 'two', value: '2' },
  ]

  return (
    <div>
      <RadioGroupDemo disabled={false} data={data} />
      {/*<RadioGroup options={options} />*/}
    </div>
  )
}

// export default App
