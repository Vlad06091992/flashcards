import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.scss'

export type CheckBoxProps = {
  className?: string
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  required?: boolean
  label?: string
  id?: string
  position?: 'left'
}

export const CheckboxComponent: React.FC<CheckBoxProps> = ({
  checked,
  className,
  disabled,
  label,
  onChange,
}) => {
  return (
    <div className={className}>
      <label className={s.Label}>
        <div tabIndex={1} className={disabled ? `${s.root_disabled}` : s.root}>
          <Checkbox.Root
            className={
              checked ? `${s.CheckboxRoot}` : `${s.CheckboxRoot} ${s.CheckboxRoot_checked}  `
            }
            defaultChecked
            onCheckedChange={onChange}
            id="c1"
            checked={checked}
            disabled={disabled}
          >
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <CheckIcon className={s.CheckboxIcon} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span className={checked ? `${s.label} ${s.label_checked}` : s.label}>{label}</span>
        </div>
      </label>
    </div>
  )
}
