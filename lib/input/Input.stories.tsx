import Input from './Input.tsx';
import { Cross, Eye, Pen, SpeechBubble } from '@/icon';
import { Field } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

const icons = {
  Cross: <Cross size={'xs'} />,
  SpeechBubble: <SpeechBubble size={'xs'} />,
  Pen: <Pen size={'xs'} />,
  None: <></>,
};

const meta = {
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'date', 'password', 'email'],
      mapping: icons,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clearable: Story = {
  parameters: {
    controls: {
      exclude: ['iconAction', 'onChange'],
    },
  },
  args: {
    type: 'text',
    icon: <Cross size={'xs'} />,
    disabled: false,
    error: '',
  },
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
      },
    },
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    const clear = () => setValue('');

    return (
      <Field className={'max-w-60'}>
        <Input
          {...args}
          placeholder={'Type here...'}
          value={value}
          iconAction={{
            name: 'Clear input',
            action: clear,
          }}
          onChange={(e) => setValue(e.target.value)}
        />
      </Field>
    );
  },
};

export const Password: Story = {
  parameters: {
    controls: {
      exclude: ['type', 'iconAction', 'icon'],
    },
  },
  args: {
    type: 'password',
    icon: <Eye size={'xs'} />,
    disabled: false,
    error: '',
  },
  render: (args) => {
    const [value, setValue] = useState<string>('');
    const [type, setType] = useState<'text' | 'password'>('password');
    const toggleShowPassword = () => setType(type === 'password' ? 'text' : 'password');

    return (
      <Field className={'max-w-60'}>
        <Input
          {...args}
          placeholder={'Type here...'}
          type={type}
          value={value}
          iconAction={{
            name: 'toggle password visibility',
            action: toggleShowPassword,
          }}
          onChange={(e) => setValue(e.target.value)}
        />
      </Field>
    );
  },
};
