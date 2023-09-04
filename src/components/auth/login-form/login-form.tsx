import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { RadioGroupOptionsType } from '@/components'
import { Button } from '@/components/ui/button/button.tsx'
import { ControlledCheckbox, ControlledRadioGroup } from '@/components/ui/controlled'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

const loginSchema = z.object({
  email: z.string().email().default(''),
  password: z.string().min(3, { message: 'минимальная длина пароля 3 символа' }).default(''),
  options: z.string().default(''),
  rememberMe: z.boolean().default(false).default(false),
})

const options: RadioGroupOptionsType[] = [
  { value: 'RadioGroup', id: 'r1', label: 'RadioGroup' },
  { value: 'comfortable', id: 'r2', label: 'comfortable' },
]

export type LoginFormType = z.infer<typeof loginSchema>

export const LoginForm = () => {
  const { handleSubmit, control, formState } = useForm<LoginFormType>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormType) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DevTool control={control} />

      <ControlledTextfield
        control={control}
        error={formState.errors?.email?.message}
        name={'email'}
        label={'email'}
      />

      <ControlledTextfield
        control={control}
        error={formState.errors?.password?.message}
        name={'password'}
        label={'password'}
      />

      <ControlledCheckbox
        name={'rememberMe'}
        control={control}
        label={'remember me'}
        disabled={false}
      />
      <ControlledRadioGroup options={options} control={control} name={'options'} />

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
//       <Textfield
//         {...register('email', {
//           required: 'Email is required',
//           pattern: { value: emailRegex, message: 'invalid email' },
//         })}
//         error={formState.errors?.email?.message}
//         label={'email'}
//       />
//       <Textfield
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
