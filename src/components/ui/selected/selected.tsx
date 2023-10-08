import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

import s from './selected.module.scss'

import { Typography } from '@/components'

type Item = {
  value: string
  label: string
}

type Props = {
  variant?: 'standart' | 'pagination'
  items: Item[]
  disabled?: boolean
  required?: boolean
  onValueChange?: (value: string) => void
  value?: string
  placeholder?: string
  label?: string
  defaultValue?: string
}

export const Selected = ({
  variant,
  items,
  disabled,
  onValueChange,
  value,
  required,
  label,
  placeholder,
}: Props) => (
  <div className={s.root}>
    <Typography variant={'body2'} as={'label'} style={{ color: '#808080' }}>
      {label}
    </Typography>
    <Select.Root
      defaultValue={items[0].value}
      onValueChange={onValueChange}
      required={required}
      value={value}
      disabled={disabled}
    >
      <Select.Trigger
        value={value}
        className={`${s.selectTrigger} ${
          variant === 'pagination' ? s.selectTriggerForPagination : ''
        }`}
      >
        <div>
          <Select.Value placeholder={placeholder}></Select.Value>
        </div>
        <div>
          <Select.Icon>
            <ChevronDownIcon className={s.selectIcon} />
          </Select.Icon>
        </div>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          className={`${s.selectContent} ${
            variant === 'pagination' ? s.selectContentForPagination : ''
          }`}
          sideOffset={-0.9}
          align={'start'}
          position={'popper'}
        >
          <Select.ScrollUpButton>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport>
            <Select.Group className={s.selectGroup}>
              {items.map(el => {
                return (
                  <Select.Item
                    className={`${s.selectItem} ${
                      variant === 'pagination' ? s.selectItemForPagination : ''
                    }`}
                    key={el.value}
                    value={el.value}
                  >
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
  </div>
)
