import type { Meta, StoryObj } from '@storybook/react'

import { CheckboxComponent } from './checkbox.tsx'

const meta = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  // argTypes: {
  //   variant: {
  //     options: ['primary', 'secondary', 'tertiary', 'link'],
  //     control: { type: 'radio' },
  //   },
  // },
} satisfies Meta<typeof CheckboxComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'fklds;k',
    disabled: false,
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
