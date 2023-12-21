import { Control, FieldValues, Path, useController } from 'react-hook-form'

import { Textfield, TextfieldProps } from '@/components'

type ControlledTextfieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
} & Omit<TextfieldProps, 'onChange' | 'value' | 'id' | 'name'>

export const ControlledTextfield = <TFieldValues extends FieldValues>({
  control,
  className,
  error,
  name,
  ...restProps
}: ControlledTextfieldProps<TFieldValues>) => {
  const {
    field: { value, ref, onChange },
    fieldState: { error: err },
  } = useController({
    name,
    control,
    rules: { required: true },
  })

  return (
    <Textfield
      id={name}
      ref={ref}
      className={className}
      error={err?.message}
      onChange={onChange}
      value={value || ''}
      {...restProps}
    />
  )
}
