import { useState } from 'react'

import { Logo } from '@/assets'
import MoreVerticalOutline from '@/assets/icons/more-vertical-outline.tsx'
import { AvatarIcon, Button, CustomDropDownMenu } from '@/components'
import { DropDownMenuForAvatar } from '@/components/ui/drop-down-menu/drop-down-menu-for-avatar.tsx'
import { Header } from '@/components/ui/header'
//надо сделать: TabSwitcher/Header
const tabs = [
  {
    value: 'myCards',
    title: 'My Cards',
  },
  {
    value: 'allCards',
    title: 'All Cards',
  },
]

export function App() {
  const isLoggedIn = false

  return (
    <Header>
      <Logo />
      {isLoggedIn ? (
        <CustomDropDownMenu
          trigger={
            <AvatarIcon imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'} />
          }
          content={
            <DropDownMenuForAvatar
              name={'Vlad'}
              email={'Smirnov.ru92@mail.ru'}
              imageUrl={'https://a.d-cd.net/44IeiDnC6Jp8eHkQEFB9w-lCYQI-960.jpg'}
            />
          }
        />
      ) : (
        <Button>Sign In</Button>
      )}
    </Header>
  )
}
