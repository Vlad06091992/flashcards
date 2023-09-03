import React from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupIndicator } from '@radix-ui/react-radio-group'

import style from './radio-group.module.scss'

export type RadioGroupDataType = {
  value: string
  id: string
  label: string
}

export type Props = {
  data: RadioGroupDataType[]
  disabled?: boolean
}

const RadioGroupDemo = ({ data, disabled }: Props) => (
  <form>
    <RadioGroup.Root
      disabled={disabled}
      onValueChange={(value: string) => {
        console.log(value)
      }}
      className="RadioGroupRoot"
      defaultValue="default"
      aria-label="View density"
    >
      {data.map(el => {
        return (
          <div
            className={disabled ? style.disabled : ''}
            key={el.id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', margin: '10px' }}
          >
            <RadioGroup.Item
              className={style.RadioGroupItem}
              value={el.value}
              id={el.id}
              key={el.id}
            >
              <RadioGroupIndicator className={style.RadioGroupIndicator} />
            </RadioGroup.Item>

            <label className="Label" htmlFor={el.id}>
              {el.label}
            </label>
          </div>
        )
      })}
    </RadioGroup.Root>
  </form>
)

export { RadioGroupDemo }
