import { Heart, HeartEmpty, SpeechBubble, SpeechBubbleEmpty } from '@/icon';
import Toggle from '@/toggle/Toggle';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import { expect } from 'storybook/test';

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
    'data-testid': 'checkbox',
  },
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('checkbox', { name: 'Toggled off' });
    await userEvent.click(button);
    await expect(canvas.getByRole('checkbox', { name: 'Toggled on' })).toBeVisible();
    await expect(await canvas.findByTestId('checkbox-icon-on')).toBeVisible();
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
