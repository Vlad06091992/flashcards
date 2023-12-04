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

export const BaseExample = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckboxComponent
        id={'id'}
        label="Click here"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}

export const Disabled = {
  render: () => {
    const [checked, setChecked] = useState(false)

    return (
      <CheckboxComponent
        id={'id'}
        disabled={true}
        label="Click here"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
    )
  },
}

export const Checked: Story = {
  args: {
    id: 'id',
    checked: true,
    label: 'Checked',
  },
}

export const NotChecked: Story = {
  args: {
    id: 'id1',
    checked: false,
    label: 'Not Checked',
  },
}
