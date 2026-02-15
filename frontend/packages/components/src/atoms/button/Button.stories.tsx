
import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from "./index";

export const ActionsData = {
  onClick: fn(),
};

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default",
    size: "large",
    type: "button"
  }
};
