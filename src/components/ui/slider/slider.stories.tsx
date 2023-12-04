import type { Meta } from '@storybook/react'

import { CustomSlider } from './slider.tsx'

const meta = {
  title: 'Components/Selected',
  component: CustomSlider,

  tags: ['autodocs'],
  argTypes: {
    values: [1, 30],
  },
} satisfies Meta<typeof CustomSlider>

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
