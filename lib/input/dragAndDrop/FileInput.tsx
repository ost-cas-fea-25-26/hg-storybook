import { ComponentSize, IconSize } from '@/common/types.ts';
import { Upload } from '@/icon';
import { Button, Loader } from '@/index.ts';
import Input from '@/input/Input.tsx';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';

export interface Props {
  label: string;
  description?: string;
  size: ComponentSize;
  files: File[];
  setFiles: (files: File[]) => void;
  dragAndDrop?: boolean;
  onDrop?: (files: File[]) => void;
  reset?: () => void;
  disabled?: boolean;
  loading?: boolean;
  buttonContent?: ReactNode;
}

type FileInputSizeMapping = {
  container: string;
  h1: string;
  h2: string;
  icon: IconSize;
};

const sizes: Record<ComponentSize, FileInputSizeMapping> = {
  small: {
    container: 'min-w-48 min-h-28',
    icon: 's',
    h1: 'text-s',
    h2: 'text-xs',
  },
  medium: {
    container: 'min-w-60 min-h-34',
    icon: 'm',
    h1: 'text-l',
    h2: 'text-m',
  },
  large: {
    container: 'min-w-72 w-full min-h-40',
    icon: 'l',
    h1: 'text-xl',
    h2: 'text-l',
  },
};

export default function FileInput({
  label,
  description,
  size = 'small',
  files = [],
  reset,
  setFiles,
  buttonContent,
  loading = false,
  disabled = false,
  onDrop = () => null,
  dragAndDrop = true,
  ...props
}: Props) {
  const { getRootProps, open, getInputProps, isDragActive, isDragReject } = useDropzone({ onDrop });
  return (
    <div className={clsx('w-fit max-w-full overflow-hidden')}>
      <div
        className={clsx(
          'cursor-pointer rounded-md border-dashed border-1 border-secondary/30 bg-secondary/10 text-secondary/80 flex items-center justify-center',
          'bg-card hover:bg-accent/50 relative cursor-pointer rounded-lg border-2 border-dashed p-3 text-center focus:outline-none',
          (loading || disabled) && 'border-border bg-muted pointer-events-none opacity-70',
          isDragActive && !isDragReject && !files?.length && !loading && !disabled && 'border-primary bg-primary/10',
          isDragReject && !loading && !disabled && 'border-destructive bg-destructive/10',
          !isDragActive && !files?.length && !isDragReject && !loading && !disabled && 'border-border',
          buttonContent && 'mb-2',
          sizes[size].container
        )}
        {...getRootProps()}
      >
        {loading ? (
          <Loader size={size} color={'secondary'} />
        ) : (
          <>
            <Input {...props} {...getInputProps()} />
            {files?.length ? (
              <div className={'flex items-center justify-center gap-2 flex-col max-w-full overflow-hidden'}>
                <Upload size={sizes[size].icon} color={'secondary'} />
                {files.map((f, i) => (
                  <h1
                    key={f.name + i}
                    className={clsx('font-bold max-w-full overflow-hidden text-ellipsis', sizes[size].h1)}
                  >
                    {f.name}
                  </h1>
                ))}
              </div>
            ) : isDragActive ? (
              <Upload size={sizes[size].icon} color={'secondary'} />
            ) : (
              <div className={'flex items-center justify-center gap-2 flex-col'}>
                <Upload size={sizes[size].icon} color={'secondary'} />
                {label && <h1 className={clsx(sizes[size].h1, 'font-bold')}>{label}</h1>}
                {description && <h2 className={clsx(sizes[size].h2)}>{description}</h2>}
              </div>
            )}
          </>
        )}
      </div>
      {buttonContent && (
        <Button variant={'secondary'} size={'medium'} onClick={open} width={'w-full'}>
          {buttonContent}
        </Button>
      )}
    </div>
  );
}
