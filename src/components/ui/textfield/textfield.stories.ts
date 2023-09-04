import type { Meta, StoryObj } from '@storybook/react'
import { Textfield } from 'src/components/ui/textfield/textfield.tsx'

const meta = {
  title: 'Components/Textfield',
  component: Textfield,
  tags: ['autodocs'],
  argTypes: {
    // variant: {
    //   options: ['primary', 'secondary', 'tertiary', 'link'],
    //   control: { type: 'radio' },
    // },
  },
} satisfies Meta<typeof Textfield>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'visible',
    disabled: false,
  },
}
//
// export const Secondary: Story = {
//   args: {
//     variant: 'search',
//     disabled: false,
//   },
// }
// export const Tertiary: Story = {
//   args: {
//     disabled: false,
//   },
// }
