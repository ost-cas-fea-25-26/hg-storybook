import FileInput from '@/input/dragAndDrop/FileInput.tsx';
import { Field } from '@headlessui/react';
import { Meta, StoryObj } from '@storybook/react-vite';
import React, { useCallback, useState } from 'react';

const meta = {
  component: FileInput,
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const File: Story = {
  args: {
    label: 'Datei hierhin ziehen',
    description: 'PNG oder JPG',
    size: 'medium',
    files: [],
    setFiles: () => [],
  },
  render: (args) => {
    const [files, setFiles] = useState<File[]>([]);
    const onDrop = useCallback((acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
    }, []);
    return (
      <>
        <Field>
          <FileInput {...args} files={files} reset={() => setFiles([])} onDrop={onDrop} />
        </Field>
        <div className={'h-5'}></div>
        {files.map((f) => {
          return (
            <>
              {f.name}, {f.size}MaybeGigabytes
            </>
          );
        })}
      </>
    );
  },
};

export const Loading: Story = {
  //@ts-ignore
  args: {
    loading: true,
  },
};
