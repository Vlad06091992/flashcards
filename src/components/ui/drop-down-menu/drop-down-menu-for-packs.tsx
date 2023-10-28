import { forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { Delete, Edit, Play } from '@/assets'
import { Typography } from '@/components'
import s from '@/components/ui/drop-down-menu/drop-down-menu.module.scss'
import { Separator } from '@/components/ui/drop-down-menu/drop-down-menu.tsx'

export const DropDownMenuForPacks = forwardRef<HTMLDivElement, {}>(({}, ref) => {
  return (
    <DropdownMenu.Content
      ref={ref}
      alignOffset={-5}
      align={'end'}
      className={s.dropDownMenuContentForPacks}
    >
      <DropdownMenu.Arrow className={s.arrowBox} asChild>
        <div className={s.arrow} />
      </DropdownMenu.Arrow>
      <DropdownMenu.Item
        onSelect={() => {
          console.log('learn')
        }}
        className={s.itemForPacks}
      >
        <Play />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          Learn
        </Typography>
      </DropdownMenu.Item>
      <Separator width={56} />
      <DropdownMenu.Item
        className={s.itemForPacks}
        onSelect={() => {
          console.log('edit')
        }}
      >
        <Edit />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          Edit
        </Typography>
      </DropdownMenu.Item>
      <Separator width={56} />

      <DropdownMenu.Item
        className={s.itemForPacks}
        onSelect={() => {
          console.log('delete')
        }}
      >
        <Delete />
        <Typography as={'span'} variant={'body1'} color={'white'}>
          Delete
        </Typography>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  )
})
