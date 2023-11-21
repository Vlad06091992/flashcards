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

interface IStack {
  #data: unknown[]
}

class Stack implements IStack {
  private _data: Array<any> = []
}

export function App() {
  const isLoggedIn = true
  const [open, setOpen] = useState(false)

  return (
    <Header>
      <RateYouself
        title={'title'}
        key={'key'}
        question={'question'}
        answerCount={10}
        answer={'answer'}
        showAnswerCallback={(data: any) => {
          console.log(data)
        }}
      />
      <Pagination
        count={10}
        page={1}
        onChange={() => {}}
        perPage={2}
        onPerPageChange={() => {}}
        perPageOptions={[
          { value: '1', label: '1' },
          { value: '2', label: '2' },
        ]}
      />
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
