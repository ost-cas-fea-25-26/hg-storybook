import { Upload } from '@/icon';
import { Loader } from '@/index.ts';
import Input from '@/input/Input.tsx';
import clsx from 'clsx';
import React from 'react';
import { useDropzone } from 'react-dropzone';

export interface Props {
  label: string;
  description?: string;
  size: 'small' | 'medium' | 'large';
  files: File[];
  setFiles: (files: File[]) => void;
  dragAndDrop?: boolean;
  onDrop?: (files: File[]) => void;
  reset?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export default function FileInput({
  label,
  description,
  size = 'small',
  files = [],
  reset,
  setFiles,
  loading = false,
  disabled = false,
  onDrop = () => null,
  dragAndDrop = true,
  ...props
}: Props) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
  });

  return (
    <>
      <div
        className={clsx(
          'cursor-pointer rounded-md border-dashed border-1 border-secondary/30 w-100 h-70 bg-secondary/10 text-secondary/80 flex items-center justify-center',
          'bg-card hover:bg-accent/50 relative min-h-[130px] cursor-pointer rounded-lg border-2 border-dashed p-3 text-center focus:outline-none',
          (loading || disabled) && 'border-border bg-muted pointer-events-none opacity-70',
          isDragActive && !isDragReject && !files?.length && !loading && !disabled && 'border-primary bg-primary/10',
          isDragReject && !loading && !disabled && 'border-destructive bg-destructive/10',
          !isDragActive && !files?.length && !isDragReject && !loading && !disabled && 'border-border'
        )}
        {...getRootProps()}
      >
        {loading ? (
          <Loader size={'large'} color={'secondary'} />
        ) : (
          <>
            <Input {...props} {...getInputProps()} />
            {files?.length ? (
              <div className={'flex items-center justify-center gap-2 flex-col'}>
                <Upload size={'m'} color={'secondary'} />
                {files.map((f) => (
                  <h1 className={'text-xl font-bold'}>{f.name}</h1>
                ))}
              </div>
            ) : isDragActive ? (
              <Upload size={'xl'} color={'secondary'} />
            ) : (
              <div className={'flex items-center justify-center gap-2 flex-col'}>
                <Upload size={'xl'} color={'secondary'} />
                {label && <h1 className={'text-xl font-bold'}>{label}</h1>}
                {description && <h2 className={'text-l'}>{description}</h2>}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
