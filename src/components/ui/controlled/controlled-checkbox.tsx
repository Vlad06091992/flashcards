import { useController, UseControllerProps } from 'react-hook-form'

import { CheckboxComponent, CheckBoxProps } from '@/components'

export const ControlledCheckbox = ({
  control,
  name,
  shouldUnregister,
  rules,
  defaultValue,
  ...restProps
}: UseControllerProps<any> & Omit<CheckBoxProps, 'onChange' | 'value' | 'id'>) => {
  const {
    field: { value, onChange },
  } = useController({ control, name, defaultValue: false })

  return <CheckboxComponent {...{ onChange, checked: value, ...restProps }} />
}
