//Input, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import { useRef } from 'react'

import { LoginForm } from '@/components/auth/login-form/login-form.tsx'

export const App = () => {
  return (
    <div>
      <LoginForm />
    </div>
  )
}

// export default App
