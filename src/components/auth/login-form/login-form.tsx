import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button/button.tsx'
import { ControlledCheckbox } from '@/components/ui/controlled'
import { Input } from '@/components/ui/input/input.tsx'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }),
  rememberMe: z.boolean().default(false),
})

export type LoginFormType = z.infer<typeof loginSchema>

type FormValues = {
  email: string
  password: string
  rememberMe?: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit, control, formState } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} error={formState.errors?.email?.message} label={'email'} />
      <Input
        {...register('password')}
        error={formState.errors.password?.message}
        label={'password'}
      />
      <ControlledCheckbox name={'rememberMe'} control={control} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}

// export const LoginForm = () => {
//   const { register, handleSubmit, control, setError, formState } = useForm<FormValues>()
//
//   const emailRegex =
//     /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
//
//   const MIN_PASSWORD_VALUE = 3
//
//   const onSubmit = (data: FormValues) => {
//     console.log(data)
//     console.log(formState.errors)
//   }
//
//   useEffect(() => {
//     console.log(formState.errors)
//   }, [formState.errors])
//
//   const {
//     field: { value: value, onChange },
//   } = useController({
//     name: 'rememberMe',
//     control,
//     defaultValue: false,
//     rules: {},
//   })
//
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input
//         {...register('email', {
//           required: 'Email is required',
//           pattern: { value: emailRegex, message: 'invalid email' },
//         })}
//         error={formState.errors?.email?.message}
//         label={'email'}
//       />
//       <Input
//         {...register('password', {
//           minLength: {
//             value: 3,
//             message: `The password should be more than ${MIN_PASSWORD_VALUE} characters`,
//           },
//         })}
//         error={formState.errors.password?.message}
//         label={'password'}
//       />
//       <Checkbox checked={value} onChange={onChange} label={'Remember me'} />
//       <Button type="submit">Submit</Button>
//     </form>
//   )
// }
