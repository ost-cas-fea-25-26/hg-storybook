import Button from './Button';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button Label',
    circle: false,
  },
};
