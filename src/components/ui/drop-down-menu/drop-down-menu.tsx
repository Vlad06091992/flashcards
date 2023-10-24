import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import MoreVerticalOutline from '@/assets/icons/more-vertical-outline.tsx'
import { AvatarIcon } from '@/components'

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
      <DropdownMenu.Arrow className={s.dropDownMenuArrow} />
      <DropdownMenu.Item style={{ width: '200px' }}>1</DropdownMenu.Item>
      <DropdownMenu.Item style={{ width: '100px' }}>2</DropdownMenu.Item>
      <DropdownMenu.Item style={{ width: '100px' }}>3</DropdownMenu.Item>
    </DropdownMenu.Content>
  )
}
