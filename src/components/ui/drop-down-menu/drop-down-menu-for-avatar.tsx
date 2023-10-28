import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Profile, Play, Logout } from '@/assets'
import { AvatarIcon, Typography } from '@/components'
import s from '@/components/ui/drop-down-menu/drop-down-menu.module.scss'
import { Separator } from '@/components/ui/drop-down-menu/drop-down-menu.tsx'

export const DropDownMenuForAvatar = () => {
  return (
    <DropdownMenu.Content
      sideOffset={10}
      alignOffset={-5}
      align={'end'}
      className={s.dropDownMenuContentForAvatar}
    >
      <DropdownMenu.Arrow className={s.arrowBox} asChild>
        <div className={s.arrow} />
      </DropdownMenu.Arrow>
      <DropdownMenu.Item
        onSelect={() => {
          console.log('avatar')
        }}
        className={s.itemForPacks}
      >
        <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />
        <div className={s.profileInfo}>
          <Typography as="div" variant={'subtitle2'} color={'white'} className={s.name}>
            Ivan
          </Typography>
          <Typography variant="body1" as="div" className={s.email}>
            j&johnson@gmail.com
          </Typography>
        </div>
      </DropdownMenu.Item>
      <Separator width={193} />
      <DropdownMenu.Item
        className={s.itemForPacks}
        onSelect={() => {
          console.log('profile')
        }}
      >
        <Profile />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          My Profile
        </Typography>
      </DropdownMenu.Item>
      <Separator width={193} />

      <DropdownMenu.Item
        className={s.itemForPacks}
        onSelect={() => {
          console.log('sign out')
        }}
      >
        <Logout />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          Sign Out
        </Typography>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  )
}
