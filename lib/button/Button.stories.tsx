import Button from './Button';
import IconButton from '@/button/IconButton.tsx';
import { Mumble, Upload } from '@/icon';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const sampleChildren = {
  Text: 'Sample Label',
  Icon: <Mumble size={'s'} color={'currentColor'} />,
  Both: (
    <>
      <span>Sample Label</span>
      <Mumble size={'s'} color={'currentColor'} />
    </>
  ),
};

const meta = {
  component: Button,
  argTypes: {
    size: { options: ['small', 'medium', 'large'] },
    children: {
      options: Object.keys(sampleChildren),
      mapping: sampleChildren,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    background: 'primary',
    textColor: 'white',
    size: 'small',
    children: 'Button Label',
    disabled: false,
    rounded: false,
  },
};

export const Icon: Story = {
  parameters: {
    controls: {
      exclude: ['children', 'rounded', 'onClick', 'width'],
    },
  },
  args: {
    background: 'primary',
    textColor: 'white',
    size: 'medium',
    children: 'Label',
    disabled: false,
  },
  render: (args) => {
    return (
      <IconButton icon={<Upload />} {...args}>
        {args.children}
      </IconButton>
    );
  },
};
