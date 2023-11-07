import { Control, FieldValues, Path, useController } from 'react-hook-form'

import { Selected, SelectProps } from '@/components'

type ControlledSelectProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
} & SelectProps

export const ControlledSelect = <TFieldValues extends FieldValues>({
  control,
  ...restProps
}: ControlledSelectProps<TFieldValues>) => {
  const {
    field: { value, onChange },
  } = useController({
    name: restProps.name,
    control,
    rules: { required: true },
  })

  return <Selected onValueChange={onChange} value={value} {...restProps} />
}
