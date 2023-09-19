import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,

  tags: ['autodocs'],
  argTypes: {
    checked: [true, false],
    disabled: [true, false],
  },
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const BaseExample: Story = {
  render: args => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckboxComponent
        {...args}
        label="Click here"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}

//
// export const Secondary: Story = {
//   args: {
//     variant: 'secondary',
//     children: 'Secondary Button',
//     disabled: false,
//   },
// }
// export const Tertiary: Story = {
//   args: {
//     variant: 'tertiary',
//     children: 'Tertiary Button',
//     disabled: false,
//   },
// }
// // export const Link: Story = {
// //     args: {
// //         variant: 'link',
// //         children: 'Tertiary Button',
// //         disabled: false,
// //     },
// // }
//
// export const FullWidth: Story = {
//   args: {
//     variant: 'primary',
//     children: 'Full Width Button',
//     disabled: false,
//     fullWidth: true,
//   },
// }
//
// export const Link: Story = {
//   args: {
//     as: 'a',
//     size: 'small',
//     label: 'Button',
//     children: 'this button is link',
//     variant: 'link',
//     href: 'https://www.google.com',
//   },
