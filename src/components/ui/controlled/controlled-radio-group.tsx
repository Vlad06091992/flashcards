import { useController } from 'react-hook-form'

import { RadioGroupComponent } from '@/components'
import { RadioGroupPropsTypes } from '@/components/ui/radio-group/radio-group.tsx'

type Props = Omit<RadioGroupPropsTypes, 'data'> & {
  control: any
  name: string
}

export const ControlledRadioGroup = ({ control, name, ...restProps }: Props) => {
  const {
    field: { onChange },
  } = useController({
    name,
    control,
    rules: { required: true },
  })

  return <RadioGroupComponent onValueChange={onChange} {...restProps} />
}
