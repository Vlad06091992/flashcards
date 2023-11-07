import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import s from './cards.modals.module.scss'

import { Close } from '@/assets'
import { Button, Card, Typography } from '@/components'
import { ControlledSelect } from '@/components/ui/controlled/controlled-select.tsx'
import { ControlledTextfield } from '@/components/ui/controlled/controlled-textfield.tsx'

type Props = {
  cancelCallback: () => void
  addCardCallback: (arg: any) => void
  closeCallback: () => void
  questionFormatVariants: {
    value: string
    label: string
  }[]
}

export const AddNewCard = ({
  addCardCallback,
  closeCallback,
  cancelCallback,
  questionFormatVariants,
}: Props) => {
  const Schema = z.object({
    questionFormat: z.string(),
    question: z.string().min(3),
    answer: z.string().min(3),
  })

  type FieldsType = z.infer<typeof Schema>

  const { control, handleSubmit } = useForm<FieldsType>({ resolver: zodResolver(Schema) })
  const onSubmit = (data: any) => {
    debugger
    console.log(data)
    addCardCallback(data)
  }

  return (
    <Card className={s.card}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.form}>
          <div className={s.formHeader}>
            <Typography color={'white'} variant={'h2'}>
              Add New Card
            </Typography>
            <Close className={s.closeIcon} onClick={closeCallback} />
          </div>
          <div className={s.fields}>
            <ControlledSelect
              items={questionFormatVariants}
              control={control}
              name={'questionFormat'}
              label={'Choose a question format'}
            />
            <ControlledTextfield control={control} name={'question'} label={'Question'} />
            <ControlledTextfield control={control} name={'answer'} label={'Answer'} />
          </div>

          <div className={s.buttons}>
            <Button type={'button'} onClick={cancelCallback} variant={'secondary'}>
              Cancel
            </Button>
            <Button type={'submit'}>Add New Card</Button>
          </div>
        </div>
      </form>
    </Card>
  )
}
