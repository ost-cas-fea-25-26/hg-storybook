import Loader from './Loader'
import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const SimpleLoader: Story = {
  args: {
    size: 'small',
    color: 'white',
  },
  render: (args) => {
    return (
      <div className={`bg-secondary-400 h-20 w-40`}>
        <Loader {...args} />
      </div>
    )
  },
}
