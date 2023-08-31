//Input, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import { LoginForm, Typography } from '@/components'
import RadioGroup, { RadioGroupDataType } from '@/components/ui/radio-group/radio-group.tsx'

export const App = () => {
  const data: RadioGroupDataType[] = [
    { value: 'default', id: 'r1' },
    { value: 'comfortable', id: 'r2' },
    { value: 'compact', id: 'r3' },
  ]

  return (
    <div>
      {/*<LoginForm />*/}
      {/*<Typography color={'white'} variant={'large'}>*/}
      {/*  Card*/}
      {/*</Typography>*/}
      <RadioGroup data={data} />
    </div>
  )
}

// export default App
