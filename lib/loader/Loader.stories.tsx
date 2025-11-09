import Loader from './Loader'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const SmallWhite: Story = {
  args: {
    size: 'small',
    color: 'white',
  },
  render: (args) => {
    return (
      <div className={`w-40 h-20 bg-primary`}>
        <Loader {...args} />
      </div>
    )
  },
}

export const MediumSecondary: Story = {
  args: {
    size: 'medium',
    color: 'secondary',
  },
  render: (args) => {
    return (
      <div className={`w-40 h-20`}>
        <Loader {...args} />
      </div>
    )
  },
}
export const LargePrimary: Story = {
  args: {
    size: 'large',
    color: 'primary',
  },
  render: (args) => {
    return (
      <div className={`w-40 h-20`}>
        <Loader {...args} />
      </div>
    )
  },
}
