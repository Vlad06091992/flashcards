import { useController } from 'react-hook-form'

import { Textfield, TextfieldProps } from '@/components'

type ControlledTextfieldProps = {
  control: any
  name: string
} & Omit<TextfieldProps, 'onChange' | 'value' | 'id' | 'name'>

export const ControlledTextfield = ({ control, ...restProps }: ControlledTextfieldProps) => {
  const {
    field: { value, onChange },
  } = useController({
    name: restProps.name,
    control,
    rules: { required: true },
  })

  return <Textfield onChange={onChange} value={value} {...restProps} />
}
