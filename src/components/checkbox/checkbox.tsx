import { ComponentPropsWithoutRef, useState } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { runStep } from '@storybook/addon-interactions/dist/preview'

import s from './checkbox.module.scss'

export const CheckboxComponent: React.FC<ComponentPropsWithoutRef<'input'>> = ({
  className,
  checked,
  defaultChecked,
  disabled,
  ...restProps
}) => {
  // debugger

  const [toggleChecked, setChecked] = useState(checked || defaultChecked)

  return (
    <form>
      <label className={s.Label} htmlFor="c1">
        <div
          tabIndex="0"
          onKeyPress={() => {
            setChecked(checked => !checked)
          }}
          className={disabled ? `${s.root_disabled}` : s.root}
        >
          <Checkbox.Root
            className={
              toggleChecked ? `${s.CheckboxRoot}` : `${s.CheckboxRoot} ${s.CheckboxRoot_checked}  `
            }
            defaultChecked
            onCheckedChange={() => {
              setChecked(checked => !checked)
            }}
            id="c1"
            checked={toggleChecked}
            disabled={disabled}
          >
            {/*<Checkbox.Indicator className={checked ? s.CheckboxIndicator : s.CheckboxRoot_checked}>*/}
            <Checkbox.Indicator className={s.CheckboxIndicator}>
              <CheckIcon className={s.CheckboxIcon} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <span className={toggleChecked ? `${s.label} ${s.label_checked}` : s.label}>
            Check-box
          </span>
        </div>
      </label>
    </form>
  )
}

export default Checkbox
