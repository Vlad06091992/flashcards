import { Outlet } from 'react-router-dom'

import s from './layout.module.scss'

import { Logo } from '@/assets'
import { AvatarIcon, CustomDropDownMenu } from '@/components'
import { DropDownMenuForAvatar } from '@/components/ui/drop-down-menu/drop-down-menu-for-avatar.tsx'
import { Header } from '@/components/ui/header'
import { useAuthMeQuery, useLogoutMutation } from '@/services/auth/auth.ts'

export const Layout = () => {
  const { data } = useAuthMeQuery()
  const [logout] = useLogoutMutation()

  const avatarUrl =
    data?.imageUrl ||
    'https://w7.pngwing.com/pngs/665/132/png-transparent-user-defult-avatar-thumbnail.png'

  // const isAuth = !!data
  return (
    <div>
      <Header>
        <div className={s.root}>
          <div>
            <Logo></Logo>
          </div>
          {data && (
            <CustomDropDownMenu
              trigger={<AvatarIcon imageUrl={avatarUrl} />}
              content={
                <DropDownMenuForAvatar
                  imageUrl={avatarUrl}
                  email={data.email}
                  name={data.name}
                  logout={() => logout()}
                />
              }
            />
          )}
        </div>
      </Header>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
