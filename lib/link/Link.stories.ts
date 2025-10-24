import Link from './Link';
import { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: Link,
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: '/?path=/story/button',
    label: 'Link Label',
  },
};
export const NewTab: Story = {
  args: {
    url: 'https://www.google.com',
    label: 'Link Label',
    target: '_blank',
  },
};
