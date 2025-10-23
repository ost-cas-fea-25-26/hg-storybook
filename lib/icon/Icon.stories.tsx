import Icon from './Icon';
import { Size } from '@/common';
import { IconType } from '@/icon/icons';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconType: IconType.PLACEHOLDER_PANDA,
    size: Size.LARGE,
  },
};

export const Primary: Story = {
  args: {
    iconType: IconType.PLACEHOLDER_PANDA,
    color: 'var(--color-primary)',
    size: Size.LARGE,
  },
};
