import { AddNewCard } from '@/pages/cards/add card/add-new-card.tsx'

//надо сделать: Modal/TabSwitcher/Header

const questionFormat = [
  { label: 'Picture', value: 'picture' },
  { label: 'Text', value: 'text' },
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

      {/*</div>*/}
    </div>
  )
}
