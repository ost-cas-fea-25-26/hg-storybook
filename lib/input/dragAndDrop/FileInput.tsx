import { ComponentSize, IconSize } from '@/common/types.ts';
import { Upload } from '@/icon';
import { Button, Loader } from '@/index.ts';
import Input from '@/input/Input.tsx';
import clsx from 'clsx';
import React, { ReactNode } from 'react';
import { useDropzone } from 'react-dropzone';

export interface Props {
  label: string;
  size: ComponentSize;
  files: File[];
  setFiles: (files: File[]) => void;

  description?: string;
  dragAndDrop?: boolean;
  onDrop?: (files: File[]) => void;
  reset?: () => void;
  disabled?: boolean;
  loading?: boolean;
  buttonContent?: ReactNode;
}

type FileInputSizeMapping = {
  container: string;
  title: string;
  subtitle: string;
  icon: IconSize;
};

const sizes: Record<ComponentSize, FileInputSizeMapping> = {
  small: {
    container: 'min-w-48 min-h-28',
    icon: 's',
    title: 'text-s',
    subtitle: 'text-xs',
  },
  medium: {
    container: 'min-w-60 min-h-34',
    icon: 'm',
    title: 'text-l',
    subtitle: 'text-m',
  },
  large: {
    container: 'min-w-72 w-full min-h-40',
    icon: 'l',
    title: 'text-xl',
    subtitle: 'text-l',
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
  const { getRootProps, open, getInputProps, isDragActive } = useDropzone({ onDrop });

  const hasButton = Boolean(buttonContent);
  const showDisabledClasses = loading || disabled;

  return (
    <div className={clsx('w-fit max-w-full overflow-hidden')}>
      <div
        className={clsx(
          `rounded-md border-dashed border-1 border-secondary/30  text-secondary/80 
          flex items-center justify-center relative p-3 text-center`,
          showDisabledClasses ? 'custom-disabled focus:outline-0' : 'hover:bg-secondary/20 cursor-pointer',
          hasButton && 'mb-2',
          sizes[size].container
        )}
        {...getRootProps()}
      >
        {loading ? (
          <Loader size={size} color={'secondary'} />
        ) : (
          <>
            <Input disabled={disabled} {...props} {...getInputProps()} />
            {files?.length ? (
              <div className={'flex items-center justify-center gap-2 flex-col max-w-full overflow-hidden'}>
                <Upload size={sizes[size].icon} color={'secondary'} />
                {files.map((f, i) => (
                  <span key={f.name + i} className={clsx('font-bold max-w-100 truncate', sizes[size].title)}>
                    {f.name}
                  </span>
                ))}
              </div>
            ) : isDragActive ? (
              <Upload size={sizes[size].icon} color={'secondary'} />
            ) : (
              <div className={'flex items-center justify-center gap-2 flex-col'}>
                <Upload size={sizes[size].icon} color={'secondary'} />
                {label && <span className={clsx(sizes[size].title, 'font-bold max-w-100 truncate')}>{label}</span>}
                {description && <span className={clsx(sizes[size].subtitle)}>{description}</span>}
              </div>
            )}
          </>
        )}
      </div>
      {buttonContent && (
        <Button background={'secondary'} size={'medium'} onClick={open} width={'w-full'}>
          {buttonContent}
        </Button>
      )}
    </div>
  );
}
