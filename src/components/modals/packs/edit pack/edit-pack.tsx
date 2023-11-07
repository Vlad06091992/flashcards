import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import s from 'src/components/modals/edit pack/cards.modals.module.scss'
import { z } from 'zod'

import { Close } from '@/assets'
import { Button, Card, Typography } from '@/components'
import { ControlledCheckbox } from '@/components/ui/controlled'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

type Props = {
  cancelCallback: () => void
  editCardCallback: (arg: any) => void
  closeCallback: () => void
}

export const EditPack = ({ editCardCallback, closeCallback, cancelCallback }: Props) => {
  const Schema = z.object({
    packName: z.string().min(3),
    isPrivatePack: z.boolean(),
  })

  type FieldsType = z.infer<typeof Schema>

  const { control, handleSubmit } = useForm<FieldsType>({ resolver: zodResolver(Schema) })
  const onSubmit = (data: any) => {
    editCardCallback(data)
  }

  return (
    <Card className={s.card}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <div className={s.formHeader}>
            <Typography color={'white'} variant={'h2'}>
              Edit Pack
            </Typography>
            <Close className={s.closeIcon} onClick={closeCallback} />
          </div>
          <div className={s.line}></div>
          <ControlledTextfield
            className={s.textfield}
            control={control}
            name={'packName'}
            label={'Name Pack'}
          />
          <ControlledCheckbox
            className={s.checkbox}
            label={'Private pack'}
            name={'isPrivatePack'}
            control={control}
          />
          <div className={s.buttons}>
            <Button type={'button'} onClick={cancelCallback} variant={'secondary'}>
              Cancel
            </Button>
            <Button type={'submit'}>Save Changes</Button>
          </div>
        </div>
      </form>
    </Card>
  )
}
