import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { Edit, Play, Delete } from '@/assets'
import { Typography } from '@/components'

type DropDownMenuProps = {
  trigger: React.JSX.Element
  content: React.JSX.Element
}

export const CustomDropDownMenu = ({ trigger, content }: DropDownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          {trigger}
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>{content}</DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

// export const DropDownMenu = () => {
//   return <div>drop down</div>
// }

export const CardDropdownMenu = () => {
  return (
    <DropdownMenu.Content alignOffset={-5} align={'end'} className={s.dropDownMenuContent}>
      <DropdownMenu.Arrow className={s.arrowBox} asChild>
        <div className={s.arrow} />
      </DropdownMenu.Arrow>
      <DropdownMenu.Item
        onSelect={() => {
          console.log('learn')
        }}
        className={s.item}
      >
        <Play />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          Learn
        </Typography>
      </DropdownMenu.Item>
      <Separator />
      <DropdownMenu.Item
        className={s.item}
        onSelect={() => {
          console.log('edit')
        }}
      >
        <Edit />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          Edit
        </Typography>
      </DropdownMenu.Item>
      <Separator />

      <DropdownMenu.Item
        className={s.item}
        onSelect={() => {
          console.log('delete')
        }}
      >
        <Delete />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          Delete
        </Typography>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  )
}

export const Separator = () => {
  return <div className={s.separator}></div>
}
