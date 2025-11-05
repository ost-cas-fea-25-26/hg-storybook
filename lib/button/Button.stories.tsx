import Button from './Button';
import { Mumble } from '@/icon';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Button Label',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Button Label',
  },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    size: 'large',
    children: 'Button Label',
  },
};

export const Rounded: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    rounded: true,
    children: <Mumble size={'s'} color={'white'} />,
  },
  render: (args) => {
    return <Button {...args}>{args.children}</Button>;
  },
};
