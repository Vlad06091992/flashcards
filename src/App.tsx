import { AddNewCard } from '@/pages/cards/add card/add-new-card.tsx'
import { EditCard } from '@/pages/cards/edit deck/edit-card.tsx'

//надо сделать: Modal/TabSwitcher/Header

const questionFormat = [
  { label: 'picture', value: 'picture' },
  { label: 'text', value: 'text' },
]

export function App() {
  return (
    <div style={{ margin: '10px' }}>
      <AddNewCard
        questionFormatVariants={questionFormat}
        cancelCallback={() => console.log('canceled')}
        addCardCallback={(data: any) => {
          console.log('added deck')
        }}
        closeCallback={() => {
          console.log('closed')
        }}
      />
      <EditCard
        questionFormatVariants={questionFormat}
        cancelCallback={() => console.log('canceled')}
        editCardCallback={(data: any) => {
          console.log('edit card')
        }}
        closeCallback={() => {
          console.log('closed')
        }}
      />
      {/*</div>*/}
    </div>
  )
}
