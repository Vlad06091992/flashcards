import { PathValue, useController, UseControllerProps } from 'react-hook-form'

import { CheckboxComponent, CheckBoxProps } from '@/components'
import { LoginFormType } from '@/components/auth/login-form/login-form.tsx'

type Props<T extends LoginFormType> = UseControllerProps<T> &
  Omit<CheckBoxProps, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <T extends LoginFormType>({
  control,
  name,
  shouldUnregister,
  rules,
  defaultValue,
  ...restProps
}: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController({ control, name, defaultValue: false as PathValue<boolean, () => boolean> })

  return (
    <CheckboxComponent
      {...{
        onChange,
        checked: value as boolean,
        id: name,
        ...restProps,
      }}
    />
  )
}
