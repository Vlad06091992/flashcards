import { useState } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './Dialog.module.scss'

import { RateYouself } from '@/components/modals/rate youself/rate-youself.tsx'

type Props = {
  isOpen: boolean
  content: React.JSX.Element
}

export const DialogWindow = ({ content, isOpen }: Props) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>{content}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
