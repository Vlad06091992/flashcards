import type { Meta, StoryObj } from '@storybook/react'

import { FieldForLogoutButton } from './FieldForLogoutButton.tsx'

import { Button } from './'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
}
export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false,
  },
}

export const WithIcon: Story = {
  args: {
    as: 'button',

    variant: 'tertiary',
    children: FieldForLogoutButton(),
    disabled: false,
  },
}

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
}

export const Link: Story = {
  args: {
    as: 'a',
    size: 'small',
    label: 'Button',
    children: 'this button is link',
    variant: 'link',
    href: 'https://www.google.com',
  },
}
