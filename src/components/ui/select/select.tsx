import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './select.module.scss'

type Item = {
  value: string
  label: string
}

type Props = {
  items: Item[]
}

export const SelectDemo = ({ items }: Props) => (
  <Select.Root>
    <Select.Trigger aria-label="Food" className={s.root}>
      <Select.Value placeholder="set value" className={s.root}></Select.Value>
      <Select.Icon className={s.root}>
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton>
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport>
          <Select.Group>
            {items.map(el => {
              return (
                <Select.Item key={el.value} value={el.value}>
                  <Select.ItemText>{el.label}</Select.ItemText>
                </Select.Item>
              )
            })}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton>
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)
