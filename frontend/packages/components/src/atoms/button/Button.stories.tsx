import type { Meta, StoryObj } from '@storybook/react-vite'
import { Mail } from 'lucide-react'
import { fn } from 'storybook/test'

import { Button } from './index'

export const ActionsData = {
  onClick: fn(),
}

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Default',
    size: 'large',
    type: 'button',
    variant: 'filled',
    palette: 'primary',
  },
}

export const ButtonWithLeftIcon: Story = {
  args: {
    title: 'Default',
    size: 'large',
    type: 'button',
    variant: 'filled',
    palette: 'primary',
    leftIcon: <Mail />,
  },
}

export const ButtonWithRightIcon: Story = {
  args: {
    title: 'Default',
    size: 'large',
    type: 'button',
    variant: 'filled',
    palette: 'primary',
    rightIcon: <Mail />,
  },
}

export const IconButton: Story = {
  args: {
    size: 'large',
    type: 'button',
    variant: 'filled',
    palette: 'primary',
    rightIcon: <Mail />,
  },
}
