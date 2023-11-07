import { AnswerRating } from '@/components/modals/answer rating/answer-rating.tsx'
import { AddNewCard } from '@/components/modals/cards/add card/add-new-card.tsx'
import { EditCard } from '@/components/modals/cards/edit deck/edit-card.tsx'
import { DeleteEntity } from '@/components/modals/delete/delete-entity.tsx'

//надо сделать: Modal/TabSwitcher/Header

const questionFormat = [
  { label: 'picture', value: 'picture' },
  { label: 'text', value: 'text' },
]

export function App() {
  return (
    <div style={{ margin: '10px' }}>
      <AnswerRating
        answerCount={10}
        title={'Javascript'}
        answer={'how are you'}
        question={'good!'}
        showAnswerCallback={() => {
          console.log('show answer')
        }}
      />
    </div>
  )
}
