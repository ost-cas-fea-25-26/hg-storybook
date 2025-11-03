import Input from './Input.tsx';
import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

const meta = {
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
    type: 'text',
    icon: 'x',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
    type: 'text',
    icon: 'x',
    error: 'This is an error message',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
    type: 'text',
    icon: 'x',
    disabled: true,
  },
  render: (args) => {
    return <Input {...args} value="" />;
  },
};

export const Date: Story = {
  args: {
    placeholder: 'Type here...',
    value: '',
    type: 'date',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
  },
};
