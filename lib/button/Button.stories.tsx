import Button from './Button'
import IconButton from '@/button/IconButton.tsx'
import { Mumble, Upload } from '@/icon'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Button Label',
    rounded: false,
  },
}

export const Rounded: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    rounded: true,
    children: <Mumble size={'s'} color={'white'} />,
  },
  render: (args) => {
    return <Button {...args}>{args.children}</Button>
  },
}

export const Icon: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Label',
  },
  render: (args) => {
    return (
      <IconButton icon={<Upload />} {...args}>
        {args.children}
      </IconButton>
    )
  },
}
