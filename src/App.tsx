//Input, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import { LoginForm, Typography } from '@/components'

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
