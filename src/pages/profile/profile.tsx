import { DefaultAvatar } from '@/assets'
import { PersonalInformation } from '@/components'
import { useAuthMeQuery, useLogoutMutation, useUpdateMeMutation } from '@/services/auth/auth.ts'

export const Profile = () => {
  const { data } = useAuthMeQuery()
  const [updateData] = useUpdateMeMutation()
  const [logout] = useLogoutMutation()

  return (
    <PersonalInformation
      email={data.email}
      avatar={data.avatar || DefaultAvatar}
      name={data.name}
      onLogout={logout}
      onAvatarChange={updateData}
      onNameChange={updateData}
    />
  )
}
