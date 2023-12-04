import type { Meta } from '@storybook/react'

import { Selected } from '@/components'

const meta = {
  title: 'Components/Selected',
  component: Selected,

  tags: ['autodocs'],
  argTypes: {
    items: [{ value: 'some Value 1', label: 'some label' }],
  },
} satisfies Meta<typeof Selected>

export default meta
// type Story = StoryObj<typeof meta>

// export const BaseExample: Story = {
//   render: args => {
//     const [checked, setChecked] = useState(false)
//
//     return (
//       <CheckboxComponent
//         {...args}
//         label="Click here"
//         checked={checked}
//         onChange={() => setChecked(!checked)}
//       />
//     )
//   },
// }
