import Textarea from './Label.tsx'
import Label from './Label.tsx'
import Input from '@/input/Input.tsx'
import { Field } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import React from 'react'

const meta = {
  component: Label,
  argTypes: {
    onChange: { action: 'changed' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    children: 'Label Example',
  },
  render: (args) => {
    const [value, setValue] = useState('')
    return (
      <Field className={'max-w-60'}>
        <Label>{args.children}</Label>
        <Input placeholder={'Type something...'} value={value} onChange={(e) => setValue(e.target.value)} />
      </Field>
    )
  },
}
