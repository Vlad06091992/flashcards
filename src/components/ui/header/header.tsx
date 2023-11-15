import { ReactNode } from 'react'

import s from './header.module.css'

type Props = {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  return <div className={s.HeaderContainer}>{children}</div>
}
