import { useState } from 'react'

import { initializeUseSelector } from 'react-redux/es/hooks/useSelector'

import { Logo } from '@/assets'
import { AvatarIcon, Button, CustomDropDownMenu, Pagination } from '@/components'
import { AddNewPack } from '@/components/modals/packs/add pack/add-new-pack.tsx'
import { RateYouself } from '@/components/modals/rate youself/rate-youself.tsx'
import { DialogWindow } from '@/components/ui/dialog'
import { DropDownMenuForAvatar } from '@/components/ui/drop-down-menu/drop-down-menu-for-avatar.tsx'
import { Header } from '@/components/ui/header'

//надо сделать: TabSwitcher/Header

//TODO fixed focus -> focus-visible
//TODO как работает автофокус в MODAL
//TODO как сделать мультиязычность, как сделать темную/светлую тему
//TODO убрать Id у radio group
//TODO Callback in forms(recover password)
//TODO custom hooks in react hook forms(recover password)
//TODO refactor pagination(double code)
//TODO 'react-toastify' for notifications
//TODO slider value | defaultValue ?

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
  const isLoggedIn = true
  const [open, setOpen] = useState(false)

  return <div>app</div>
}
