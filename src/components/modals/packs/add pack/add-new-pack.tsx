import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './cards.modals.module.scss'

import { Close } from '@/assets'
import { Button, Card, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/ui/controlled'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

type Props = {
  cancelCallback: () => void
  addCardCallback: (arg: any) => void
  closeCallback: () => void
}

export const AddNewPack = ({ addCardCallback, closeCallback, cancelCallback }: Props) => {
  const Schema = z.object({
    name: z.string().min(3),
    isPrivate: z.boolean(),
  })

  type FieldsType = z.infer<typeof Schema>

  const { control, handleSubmit } = useForm<FieldsType>({ resolver: zodResolver(Schema) })
  const onSubmit = (data: any) => {
    addCardCallback(data)
  }

  return (
    <Card className={s.card}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <div className={s.formHeader}>
            <Typography color={'white'} variant={'h2'}>
              Add New Pack
            </Typography>
            <Close className={s.closeIcon} onClick={closeCallback} />
          </div>
          <div className={s.line}></div>
          <ControlledTextfield
            className={s.textfield}
            control={control}
            name={'name'}
            label={'Name Pack'}
          />
          <ControlledCheckbox
            className={s.checkbox}
            label={'Private pack'}
            name={'isPrivate'}
            control={control}
          />
          <div className={s.buttons}>
            <Button type={'button'} onClick={cancelCallback} variant={'secondary'}>
              Cancel
            </Button>
            <Button type={'submit'}>Add New Pack</Button>
          </div>
        </div>
      </form>
    </Card>
  )
}
