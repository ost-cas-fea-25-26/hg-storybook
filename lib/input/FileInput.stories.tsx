import { Upload } from '@/icon'
import FileInput from '@/input/dragAndDrop/FileInput.tsx'
import Label from '@/label/Label'
import { Field } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react-vite'
import React, { useCallback, useState } from 'react'
import { expect, userEvent, waitFor } from 'storybook/test'

const buttonOptions = {
  NoButton: null,
  SimpleButton: () => (
    <span className={'flex items-center gap-2'}>
      <span>Or Click Here, son</span>
      <Upload size={'xs'} color={'currentColor'} />
    </span>
  ),
}

const meta = {
  component: FileInput,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
    },
    buttonContent: {
      options: Object.keys(buttonOptions),
      mapping: buttonOptions,
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

export const Small: Story = {
  parameters: {
    controls: {
      exclude: ['files', 'setFiles', 'onDrop', 'reset'],
    },
  },
  args: {
    label: 'Datei hierhin ziehen',
    description: 'PNG oder JPG',
    size: 'small',
    disabled: false,
    loading: false,
    dragAndDrop: true,
    files: [],
    setFiles: () => {},
  },
  render: (args) => {
    const [files, setFiles] = useState<File[]>([])
    const onDrop = useCallback((acceptedFiles: File[]) => {
      setFiles(acceptedFiles)
    }, [])
    return (
      <>
        <Field>
          <Label>Upload</Label>
          <FileInput
            {...args}
            setFiles={setFiles}
            data-testid={'upload-input'}
            files={files}
            reset={() => setFiles([])}
            onDrop={onDrop}
          />
        </Field>
        <div className={'h-5'}></div>
        {files.map((f) => {
          return (
            <>
              {f.name}, {f.size}MaybeGigabytes
            </>
          )
        })}
      </>
    )
  },
  play: async ({ canvas }) => {
    const input = canvas.getByTestId('upload-input') as HTMLInputElement
    const file = new File(['dummy-content'], 'test-image.png', { type: 'image/png' })
    await userEvent.upload(input!, file)
    await waitFor(() => {
      expect(canvas.getByText('test-image.png')).toBeVisible()
    })
  },
}
