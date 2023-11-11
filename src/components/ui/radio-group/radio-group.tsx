import { forwardRef } from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'
import { RadioGroupIndicator, RadioGroupProps } from '@radix-ui/react-radio-group'

import style from './radio-group.module.scss'

import { Typography } from '@/components'

export type RadioGroupOptionsType = {
  value: string
  id: string
  label: string
}

export type RadioGroupPropsTypes = {
  options: RadioGroupOptionsType[]
} & RadioGroupProps

export const RadioGroupComponent = forwardRef<HTMLDivElement, RadioGroupPropsTypes>(
  ({ options, disabled, onChange, ...restProps }, ref) => (
    <div>
      <RadioGroup.Root
        name={'result'}
        disabled={disabled}
        onChange={onChange}
        className="RadioGroupRoot"
        aria-label="View density"
        {...restProps}
      >
        {options.map(el => {
          return (
            <div
              ref={ref}
              className={
                disabled ? `${style.itemsContainer}  ${style.disabled}` : style.itemsContainer
              }
              key={el.id}
            >
              <RadioGroup.Item
                className={style.RadioGroupItem}
                value={el.value}
                id={el.id}
                key={el.id}
              >
                <RadioGroupIndicator className={style.RadioGroupIndicator} />
              </RadioGroup.Item>
              <Typography className={style.label} variant={'body2'} as={'label'} htmlFor={el.value}>
                <label htmlFor={el.id}> {el.label}</label>
              </Typography>
            </div>
          )
        })}
      </RadioGroup.Root>
    </div>
  )
)
