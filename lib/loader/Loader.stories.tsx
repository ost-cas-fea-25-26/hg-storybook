import Loader from './Loader';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleLoader: Story = {
  args: {
    size: 'small',
    color: 'white',
  },
  render: (args) => {
    return (
      <div className={`w-40 h-20 bg-secondary-400`}>
        <Loader {...args} />
      </div>
    );
  },
};
