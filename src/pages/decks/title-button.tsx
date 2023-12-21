import { useState } from 'react'

import { Button, Typography } from '@/components'
import { AddNewPack } from '@/components/modals/packs/add pack/add-new-pack.tsx'
import { DialogWindow } from '@/components/ui/dialog'
import s from '@/pages/decks/decks.module.scss'

export const TitleAndAddButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={s.titleAndButton}>
      <Typography variant={'large'}>Packs List</Typography>

      <Button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Add new pack
      </Button>
      <DialogWindow
        onCloseAutoFocus={() => setIsOpen(false)}
        isOpen={isOpen}
        content={
          <AddNewPack
            cancelCallback={() => {
              setIsOpen(false)
            }}
            addCardCallback={data => {
              console.log(data)
            }}
            closeCallback={() => {
              setIsOpen(false)
            }}
          />
        }
      />
    </div>
  )
}
