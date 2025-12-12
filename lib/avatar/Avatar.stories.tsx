import imageFile from '../../static/images/profile.jpg'
import Avatar from './Avatar.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  component: Avatar,
  argTypes: {
    src: {
      control: { type: 'select' },
      options: ['No Image', 'Profile Image'],
      mapping: {
        'No Image': undefined,
        'Profile Image': imageFile,
      },
    },
    onEdit: {
      control: false,
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    size: 'm',
    editButton: true,
    borderless: false,
    editAriaLabel: 'Avatar bearbeiten',
    src: 'Profile Image',
  },
  render: (args) => <Avatar {...args} />,
}
