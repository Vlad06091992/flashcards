import { forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Link } from 'react-router-dom'

import { Logout, Profile } from '@/assets'
import { AvatarIcon, Typography } from '@/components'
import s from '@/components/ui/drop-down-menu/drop-down-menu.module.scss'
import { Separator } from '@/components/ui/drop-down-menu/drop-down-menu.tsx'

type Props = {
  imageUrl: string
  email: string
  name: string
  logout: () => void
}

// export const DropDownMenuForPacks = React.forwardRef(({}, ref) => {

export const DropDownMenuForAvatar = forwardRef<HTMLDivElement, Props>(
  ({ name, email, imageUrl, logout }: Props, ref) => {
    return (
      <DropdownMenu.Content
        ref={ref}
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
          <AvatarIcon imageUrl={imageUrl} />
          <div className={s.profileInfo}>
            <Typography as="div" variant={'subtitle2'} color={'white'} className={s.name}>
              {name}
            </Typography>
            <Typography variant="caption" as="div" className={s.email}>
              {email}
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
          <Typography as={Link} to={'/profile'} variant={'caption'} color={'white'}>
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
          <Typography onClick={logout} as={'span'} variant={'caption'} color={'white'}>
            Sign Out
          </Typography>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    )
  }
)
