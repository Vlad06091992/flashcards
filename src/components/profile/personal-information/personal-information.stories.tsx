import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/components'

const meta = {
  title: 'Profile/PersonalInformation',
  component: PersonalInformation,
  tags: ['autodocs'],
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  args: {
    name: 'Vlad',
    email: 'some@email.ru',
    avatar: 'https://picsum.photos/200',
    onLogout: () => {
      console.log('logout')
    },
    onAvatarChange: () => {
      console.log('newAvatar')
    },
    onNameChange: () => {
      debugger
      console.log('newNAme')
    },
  },
}
