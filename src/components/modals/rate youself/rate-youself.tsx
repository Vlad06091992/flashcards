import { useForm } from 'react-hook-form'

import s from './rate-youself.module.scss'

import { Button, Card, RadioGroupComponent, RadioGroupOptionsType, Typography } from '@/components'

type Props = {
  title: string
  answer: string
  question: string
  answerCount: number
  showAnswerCallback: () => void
}

const RateYouSelfOptions2: RadioGroupOptionsType[] = [
  { value: '5', label: 'Did not know', id: '5' },
  { value: '4', label: 'Forgot', id: '4' },
  { value: '3', label: 'A lot of though', id: '3' },
  { value: '2', label: 'Confused', id: '2' },
  { value: '1', label: 'Knew the answer', id: '1' },
]

export const RateYouself = ({ title, question, answerCount, showAnswerCallback }: Props) => {
  const form = useForm<{ result: string }>()
  const { register, handleSubmit } = form

  const onSubmitHandler = (data: { result: string }) => {
    console.log(data.result)
    showAnswerCallback()
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
          <RadioGroupComponent {...register('result')} options={RateYouSelfOptions2} />
        </div>
        <Button type={'submit'} fullWidth={true} className={s.button} onClick={showAnswerCallback}>
          Show Answer
        </Button>
      </form>
    </Card>
  )
}
