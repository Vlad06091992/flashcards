import { useForm, SubmitHandler } from 'react-hook-form'

import { Input, RadioGroupOptionsType } from '@/components'
import { ControlledRadioGroup } from '@/components/ui/controlled/controlled-radio-group.tsx'

type Inputs = {
  example?: string
  exampleRequired?: string
  options: RadioGroupOptionsType[]
}

export default function TestControlledRadioGroupAndInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data)

  const options: RadioGroupOptionsType[] = [
    { value: 'RadioGroup', id: 'r1', label: 'RadioGroup' },
    { value: 'comfortable', id: 'r2', label: 'comfortable' },
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input defaultValue="test" {...register('example')} />
      <ControlledRadioGroup options={options} control={control} name={'options'} />
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}
