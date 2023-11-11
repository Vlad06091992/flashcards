import { RateYouself } from '@/components/modals/rate youself/rate-youself.tsx'

//надо сделать: Modal/TabSwitcher/Header

export function App() {
  return (
    <div style={{ margin: '10px' }}>
      <RateYouself
        title={'Javascript'}
        answerCount={10}
        answer={'how are you'}
        question={'good!'}
        showAnswerCallback={() => {
          console.log('show answer')
        }}
      />
    </div>
  )
}
