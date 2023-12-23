import { useForm } from 'react-hook-form'

import s from './rate-youself.module.scss'

import { Button, Card, RadioGroupOptionsType, Typography } from '@/components'
import { ControlledRadioGroup } from '@/components/ui/controlled'

type Props = {
  title: string
  answer: string
  question: string
  answerCount: number
  showAnswerCallback: (data: any) => void
}

const RateYouSelfOptions: RadioGroupOptionsType[] = [
  { value: '1', label: 'Did not know', id: '1' },
  { value: '2', label: 'Forgot', id: '2' },
  { value: '3', label: 'A lot of though', id: '3' },
  { value: '4', label: 'Confused', id: '4' },
  { value: '5', label: 'Knew the answer', id: '5' },
]

type FormType = { result: string }

export const RateYouself = ({ title, question, answerCount, showAnswerCallback }: Props) => {
  const form = useForm<FormType>()
  const { control, handleSubmit } = form

  const onSubmitHandler = (data: FormType) => {
    // console.log(data)
    showAnswerCallback(data)
  }

  return (
    <Card className={s.card}>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Typography color={'white'} variant={'large'}>
          Learn {title}
        </Typography>
        <div className={s.form}>
          <Typography variant={'subtitle2'} className={s.description}>
            Question:
            <Typography variant={'subtitle1'} as={'span'}>
              {` ${question}`}
            </Typography>
          </Typography>
          <Typography className={s.instructions} variant={'body2'}>
            Kоличество попыток ответов на вопрос:<b>{` ${answerCount}`}</b>
            <b></b>
          </Typography>
          <Typography variant={'subtitle2'} className={s.description}>
            Rate yourself:
          </Typography>
          {/*<RadioGroupComponent {...register('result')} options={RateYouSelfOptions} />*/}
          <ControlledRadioGroup control={control} options={RateYouSelfOptions} name={'result'} />
        </div>
        <Button type={'submit'} fullWidth={true} className={s.button}>
          Show Answer
        </Button>
      </form>
    </Card>
  )
}
