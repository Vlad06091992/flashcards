import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../typography/typography.tsx'

import { Card } from './card.tsx'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <Typography color={'white'} variant={'large'}>
        Card
      </Typography>
    ),
    style: {
      width: '300px',
      height: '300px',
      padding: '24px',
    },
  },
}
