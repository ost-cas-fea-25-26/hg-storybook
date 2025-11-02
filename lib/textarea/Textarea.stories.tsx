import Textarea from './Textarea.tsx';
import { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import React from 'react';

const meta = {
  component: Textarea,
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
    error: 'This is an error message',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Textarea {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
    disabled: true,
  },
  render: (args) => {
    return <Textarea {...args} value="" />;
  },
};
