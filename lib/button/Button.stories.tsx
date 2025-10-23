import Button from './Button';
import { Size } from '@/common';
import { Variant } from '@/common/Variant.ts';
import Icon from '@/icon/Icon.tsx';
import { IconType } from '@/icon/icons';
import { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: Variant.PRIMARY,
    size: Size.SMALL,
    children: 'Button Label',
  },
};

export const Secondary: Story = {
  args: {
    variant: Variant.SECONDARY,
    size: Size.MEDIUM,
    children: 'Button Label',
  },
};

export const Gradient: Story = {
  args: {
    variant: Variant.GRADIENT,
    size: Size.LARGE,
    children: 'Button Label',
  },
};

export const Rounded: Story = {
  args: {
    variant: Variant.PRIMARY,
    size: Size.SMALL,
    rounded: true,
    children: <Icon iconType={IconType.PLACEHOLDER_PANDA} size={Size.MEDIUM} color={'white'} />,
  },
};
