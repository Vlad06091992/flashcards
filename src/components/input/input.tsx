import { ComponentPropsWithoutRef } from 'react'

import * as Checkbox from '@radix-ui/react-checkbox'

import s from './input.module.scss'

type Props = {
  error?: string
  variant?: 'search' | 'visible'
}

export const Input: React.FC<ComponentPropsWithoutRef<'input'> & Props> = ({
  className,
  checked,
  defaultChecked,
  disabled,
  error,
  type,
  ...restProps
}) => {
  // debugger

  return (
    <form>
      <span className={`material-icons ${s.icon}`}>search</span>

      <input
        placeholder={'Input search'}
        type={type}
        className={`${s.inputBox} ${s.inputPrimary}`}
        {...restProps}
      />
      {error && <p>{error}</p>}
    </form>
  )
}

export default Checkbox
