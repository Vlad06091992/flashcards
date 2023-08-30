//Input, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import { Typography } from '../src/components/ui/typography/typography.tsx'

import { LoginForm } from '@/components'

export const App = () => {
  return (
    <div>
      <LoginForm />
      <Typography color={'white'} variant={'large'}>
        Card
      </Typography>
    </div>
  )
}

// export default App
