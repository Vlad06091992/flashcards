import { Control, FieldValues, Path, PathValue, useController } from 'react-hook-form'

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
    defaultValue: restProps.items[0].value as PathValue<TFieldValues, Path<TFieldValues>>,
    name: restProps.name,
    control,
    rules: { required: true },
  })

  return <Selected onValueChange={onChange} {...restProps} value={value} />
}
