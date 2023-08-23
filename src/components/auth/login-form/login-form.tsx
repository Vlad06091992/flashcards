import { name } from 'clsx'
import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button/button.tsx'
import Checkbox from '@/components/ui/checkbox/checkbox.tsx'
import { Input } from '@/components/ui/input/input.tsx'

type FormValues = {
  email: string
  password: string
  rememberMe?: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({ name: 'rememberMe', control, defaultValue: false })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} label={'email'} />
      <Input {...register('password')} label={'password'} />
      <Checkbox checked={value} onChange={onChange} label={'Remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
