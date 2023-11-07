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
      <DeleteEntity
        cancelCallback={() => {}}
        deleteCardCallback={() => {}}
        closeCallback={() => {}}
        title={'Delete Card'}
        target={'Card'}
        entities={'Cards'}
      />
    </div>
  )
}
