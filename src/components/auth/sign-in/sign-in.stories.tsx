import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { withRouter } from 'storybook-addon-react-router-v6'

import { SignIn } from './sign-in.tsx'

import { store } from '@/services/store.ts'

const meta = {
  title: 'SignIn/SignIn',
  component: SignIn,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  args: {
    onSubmit: data => {
      debugger
    },
  },
  render: () => (
    <Provider store={store}>
      <SignIn />
    </Provider>
  ),
}
