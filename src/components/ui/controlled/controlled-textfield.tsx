import { Control, FieldValues, Path, useController } from 'react-hook-form'

import { Textfield, TextfieldProps } from '@/components'

type ControlledTextfieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
} & Omit<TextfieldProps, 'onChange' | 'value' | 'id' | 'name'>

export const ControlledTextfield = <TFieldValues extends FieldValues>({
  control,
  className,
  ...restProps
}: ControlledTextfieldProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name: restProps.name,
    control,
    rules: { required: true },
  })

  return <Textfield className={className} onChange={onChange} value={value} {...restProps} />
}
