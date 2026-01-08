import Link from './Link'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  component: Link,
  argTypes: {
    target: {
      options: ['default', 'new Tab'],
      mapping: {
        default: null,
        'new Tab': '_blank',
      },
    },
  },
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    url: '/?path=/story/button',
    children: 'Link Label',
  },
  render: (args) => <Link {...args}>{args.children}</Link>,
}

export const NewTab: Story = {
  args: {
    url: 'https://www.google.com',
    children: 'Link Label',
    target: '_blank',
  },
  render: (args) => <Link {...args}>{args.children}</Link>,
}
