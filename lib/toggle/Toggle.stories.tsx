import { Heart, HeartEmpty, SpeechBubble, SpeechBubbleEmpty } from '@/icon';
import Toggle from '@/toggle/Toggle.tsx';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contrast: Story = {
  args: {
    checkedProps: {
      icon: <Heart size={'xs'} />,
      label: 'Toggled on',
    },
    uncheckedProps: {
      icon: <HeartEmpty size={'xs'} />,
      label: 'Toggled off',
    },
    onChange: () => console.log('hello world'),
    color: 'contrast',
  },
};

export const Primary: Story = {
  args: {
    checkedProps: {
      icon: <SpeechBubble size={'xs'} />,
      label: 'Toggled on',
    },
    uncheckedProps: {
      icon: <SpeechBubbleEmpty size={'xs'} />,
      label: 'Toggled off',
    },
    onChange: () => console.log('hello world'),
    color: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    checkedProps: {
      icon: <SpeechBubbleEmpty size={'xs'} />,
      label: 'Disabled',
    },
    onChange: () => console.log('hello world'),
    color: 'primary',
    disabled: true,
  },
};

export const OnlyOneIcon: Story = {
  args: {
    checkedProps: {
      icon: <Heart size={'xs'} />,
      label: 'One Icon Only',
    },
    onChange: () => console.log('hello world'),
    color: 'primary',
  },
};
