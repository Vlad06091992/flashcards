import { useState } from 'react'

import { RateYouself } from '@/components/modals/rate youself/rate-youself.tsx'
import { DialogWindow } from '@/components/ui/dialog/Dialog.tsx'

//надо сделать: Modal/TabSwitcher/Header

export function App() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ margin: '10px' }}>
      <button onClick={() => setOpen(true)}>OPEN MODAL</button>
      <DialogWindow
        isOpen={open}
        content={
          <RateYouself
            title={'Javascript'}
            answerCount={10}
            answer={'how are you'}
            question={'good!'}
            showAnswerCallback={(res: any) => {
              console.log(res)
              setOpen(false)
              console.log('show answer')
            }}
          />
        }
      />
    </div>
  )
}
