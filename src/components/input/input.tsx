import { ComponentPropsWithoutRef, useState } from 'react'

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
  placeholder,
  variant,
  ...restProps
}) => {
  // debugger
  const [visible, setVisible] = useState(type == 'password')

  return (
    <div
      className={`${variant == 'search' || variant == 'visible' ? s.rootSearchAndVisible : ''}  ${
        disabled ? s.inputDisabled : ''
      }`}
    >
      {!variant && (
        <div>
          <input
            disabled={disabled}
            placeholder={placeholder}
            type={type}
            className={` ${s.inputPrimary} ${s.inputStandart} ${error ? s.inputError : ''}  `}
            {...restProps}
          />
        </div>
      )}

      {variant == 'visible' && (
        <div>
          {visible && (
            <span
              onClick={() => setVisible(!visible)}
              className={`material-icons ${s.iconVisible}`}
            >
              visibility
            </span>
          )}
          {!visible && (
            <span
              onClick={() => setVisible(!visible)}
              className={`material-icons ${s.iconVisible}`}
            >
              visibility_off
            </span>
          )}

          <input
            disabled={disabled}
            placeholder={placeholder}
            type={visible ? 'password' : ''}
            className={` ${s.inputPrimary} ${variant == 'visible' ? s.inputVisible : ''} ${
              error ? s.inputError : ''
            }  `}
            {...restProps}
          />
        </div>
      )}

      {variant == 'search' && (
        <div>
          <span className={`material-icons ${variant == 'search' ? s.iconSearch : ''}`}>
            search
          </span>
          <input
            disabled={disabled}
            placeholder={placeholder}
            type={type}
            className={` ${s.inputPrimary} ${variant == 'search' ? s.inputSearch : ''} ${
              error ? s.inputError : ''
            }  `}
            {...restProps}
          />
        </div>
      )}

      {error && (
        <p
          className={
            variant ? s.errorDescription : `${s.errorDescriptionStandart} ${s.errorDescription}`
          }
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default Checkbox
