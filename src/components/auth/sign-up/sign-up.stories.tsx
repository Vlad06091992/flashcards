import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { withRouter } from 'storybook-addon-react-router-v6'

import { SignUp } from './sign-up.tsx'

import { store } from '@/services/store.ts'

const meta = {
  title: 'SignIn/SignUp',
  component: SignUp,
  decorators: [withRouter],
  tags: ['autodocs'],
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  args: {
    onSubmit: (data: string) => {
      console.log(data)
    },
    // reactRouter: reactRouterParameters({
    //   location: {
    //     pathParams: { userId: '42' },
    //     searchParams: { tab: 'activityLog' },
    //     state: { fromPage: 'homePage' },
    //   },
    //   routing: {
    //     path: '/users/:userId',
    //     handle: 'Profile',
    //   },
    // }),
  },
  render: () => (
    <Provider store={store}>
      <SignUp />
    </Provider>
  ),
}
