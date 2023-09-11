//Textfield, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import { PersonalInformation } from '@/components'

export const App = () => {
  return (
    <div>
      {/*<LoginForm />*/}
      {/*<CheckEmail />*/}
      {/*<SignUp />*/}
      {/*<RecoverPassword />*/}
      {/*<CheckEmail />*/}
      <PersonalInformation
        email={'Smirnov.ru92@mail.ru'}
        name={'Vlad'}
        avatar={'https://i.pinimg.com/736x/94/ec/85/94ec85ebd3ddae955dcb28cfe7b23ccc.jpg'}
        onAvatarChange={() => {}}
        onLogout={() => {}}
        onNameChange={() => {}}
      />
      {/*<CreateNewPassword />*/}
      {/*<*/}
      {/*<span>123</span>*/}

      {/*<Textfield />*/}
    </div>
  )
}

// export default App
