import { useState } from 'react'

import { initializeUseSelector } from 'react-redux/es/hooks/useSelector'

import { Logo } from '@/assets'
import { AvatarIcon, Button, CustomDropDownMenu } from '@/components'
import { AddNewPack } from '@/components/modals/packs/add pack/add-new-pack.tsx'
import { DialogWindow } from '@/components/ui/dialog'
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
  const [open, setOpen] = useState(false)

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
        <Button onClick={() => setOpen(!open)}>Sign In</Button>
      )}
    </Header>
  )
}
