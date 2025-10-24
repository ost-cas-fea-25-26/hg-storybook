import IconList from '@/icon/IconList.tsx';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: IconList,
} satisfies Meta<typeof IconList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'var(--color-primary)',
    size: 'l',
  },
};
export const Default: Story = {
  args: {},
};
