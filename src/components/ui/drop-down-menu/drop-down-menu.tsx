import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './drop-down-menu.module.scss'

import { AvatarIcon } from '@/components'

export const DropDownMenuWithAvatar = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content alignOffset={-5} align={'end'} className={s.dropDownMenuContent}>
          <DropdownMenu.Item style={{ width: '200px' }}>1</DropdownMenu.Item>
          <DropdownMenu.Item style={{ width: '100px' }}>2</DropdownMenu.Item>
          <DropdownMenu.Item style={{ width: '100px' }}>3</DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.dropDownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

// export const DropDownMenu = () => {
//   return <div>drop down</div>
// }
