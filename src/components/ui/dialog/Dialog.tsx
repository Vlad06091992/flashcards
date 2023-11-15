import * as Dialog from '@radix-ui/react-dialog'

import s from './Dialog.module.scss'

type Props = {
  onCloseAutoFocus?: () => void
  isOpen: boolean
  content: React.JSX.Element
}

export const DialogWindow = ({ onCloseAutoFocus, content, isOpen }: Props) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content onInteractOutside={() => onCloseAutoFocus} className={s.DialogContent}>
          {content}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
