import React from 'react'

import * as RadioGroup from '@radix-ui/react-radio-group'

import style from './radio-group.module.scss'

export type RadioGroupDataType = {
  value: string
  id: string
}

export type Props = {
  data: RadioGroupDataType[]
}

const RadioGroupDemo = ({ data }: Props) => (
  <form>
    <RadioGroup.Root
      onValueChange={(value: string) => {
        console.log(value)
      }}
      className="RadioGroupRoot"
      defaultValue="default"
      aria-label="View density"
    >
      {data.map(el => {
        return <RadioGroupItem value={el.value} id={el.id} key={el.id} />
      })}
    </RadioGroup.Root>
  </form>
)

const RadioGroupItem = ({ value, id }: RadioGroupDataType) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RadioGroup.Item
        className={style.RadioGroupItem}
        value={value}
        id={id}
        onChange={() => {
          debugger
        }}
      >
        <RadioGroup.Indicator className={style.RadioGroupIndicator} />
      </RadioGroup.Item>
      <label className="Label" htmlFor={id}>
        {value}
      </label>
    </div>
  )
}

export default RadioGroupDemo
