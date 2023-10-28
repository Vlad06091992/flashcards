import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

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

type SeparatorProps = {
  width: number
}

export const Separator = ({ width }: SeparatorProps) => {
  return <div style={{ width: `${width}px` }} className={s.separator}></div>
}
