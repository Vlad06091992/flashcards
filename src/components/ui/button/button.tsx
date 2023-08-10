import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'link'
  fullWidth?: boolean
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>({
  variant = 'primary',
  fullWidth,
  className,
  as,
  ...rest
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  let Component = as || 'button'

  return (
    <Component className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`} {...rest} />
  )
}
