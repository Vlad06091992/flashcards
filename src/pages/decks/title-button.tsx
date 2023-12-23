import { useState } from 'react'

import { Button, Typography } from '@/components'
import { AddNewPack } from '@/components/modals/packs/add pack/add-new-pack.tsx'
import { DialogWindow } from '@/components/ui/dialog'
import s from '@/pages/decks/decks.module.scss'
import { useCreateDeckMutation } from '@/services/decks/decks.ts'

export const TitleAndAddButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [createDeck] = useCreateDeckMutation()

  console.log(createDeck)

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
              createDeck(data)
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
