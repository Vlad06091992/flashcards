//Textfield, button, таблицы, карточка, пагинация  --- нативно, остальные на основе Radix

import {
  PersonalInformation,
  SignUp,
  CheckEmail,
  CreateNewPassword,
  LoginForm,
  SignIn,
  RecoverPassword,
  CheckboxComponent,
} from '@/components'

const onSubmit = (data: any) => {
  debugger
}

export const App = () => {
  return (
    <div>
      {/*<LoginForm />*/}
      {/*<CheckEmail />*/}
      {/*<SignUp onSubmit={onSubmit} />*/}
      {/*<SignIn onSubmit={onSubmit} />*/}

      {/*<RecoverPassword />*/}
      {/*<CheckEmail email="Smirnov.ru92@mail.ru" />*/}
      {/*<PersonalInformation*/}
      {/*  email={'Smirnov.ru92@mail.ru'}*/}
      {/*  name={'Ivan'}*/}
      {/*  avatar={'https://i.pinimg.com/736x/94/ec/85/94ec85ebd3ddae955dcb28cfe7b23ccc.jpg'}*/}
      {/*  onAvatarChange={() => {}}*/}
      {/*  onLogout={() => {}}*/}
      {/*  onNameChange={() => {}}*/}
      {/*/>*/}
      <CheckboxComponent onChange={() => {}} label={'checkbox'} />
      {/*<CreateNewPassword onSubmit={onSubmit} />*/}
    </div>
  )
}

// export default App
