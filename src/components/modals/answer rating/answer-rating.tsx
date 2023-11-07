import { Link } from 'react-router-dom'

import s from './answer-rating.module.scss'

import { Email } from '@/assets'
import { Button, Card, Typography } from '@/components'

type Props = {
  title: string
  answer: string
  question: string
  answerCount: number
  showAnswerCallback: () => void
}

export const AnswerRating = ({
  title,
  answer,
  question,
  answerCount,
  showAnswerCallback,
}: Props) => {
  return (
    <Card className={s.card}>
      <Typography color={'white'} variant={'large'}>
        Learn {title}
      </Typography>
      <div className={s.form}>
        {/*<Typography variant={'subtitle2'} className={s.description}>*/}
        {/*  Answer:*/}
        {/*  <Typography variant={'subtitle1'} as={'span'}>*/}
        {/*    {` ${answer}`}*/}
        {/*  </Typography>*/}
        {/*</Typography>*/}
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
      </div>
      <Button fullWidth={true} className={s.button} onClick={showAnswerCallback}>
        Show Answer
      </Button>
    </Card>
  )
}
