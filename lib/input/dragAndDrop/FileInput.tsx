import { ComponentSize, IconSize } from '@/common/types.ts'
import { Upload } from '@/icon'
import { Button, Loader } from '@/index.ts'
import { Input } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactNode } from 'react'
import { useDropzone } from 'react-dropzone'

export interface Props {
  label: string
  size: ComponentSize
  files: File[]
  setFiles: (files: File[]) => void

  description?: string
  dragAndDrop?: boolean
  onDrop?: (files: File[]) => void
  reset?: () => void
  disabled?: boolean
  loading?: boolean
  buttonContent?: ReactNode
}

type FileInputSizeMapping = {
  container: string
  title: string
  subtitle: string
  icon: IconSize
}

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
}

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
  const { getRootProps, open, getInputProps, isDragActive } = useDropzone({ onDrop })

  const hasButton = Boolean(buttonContent)
  const showDisabledClasses = loading || disabled

  return (
    <div className={clsx('w-full')}>
      <div
        className={clsx(
          `relative flex items-center justify-center rounded border-1 border-dashed border-slate-400 p-3 text-center text-slate-600/80`,
          showDisabledClasses ? 'custom-disabled focus:outline-0' : 'cursor-pointer hover:bg-slate-600/20',
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
              <div className={'flex max-w-full flex-col items-center justify-center gap-2 overflow-hidden'}>
                <Upload size={sizes[size].icon} color={'secondary'} />
                {files.map((f, i) => (
                  <span key={f.name + i} className={clsx('max-w-100 truncate font-bold', sizes[size].title)}>
                    {f.name}
                  </span>
                ))}
              </div>
            ) : isDragActive ? (
              <Upload size={sizes[size].icon} color={'secondary'} />
            ) : (
              <div className={'flex flex-col items-center justify-center gap-2'}>
                <Upload size={sizes[size].icon} color={'secondary'} />
                {label && <span className={clsx(sizes[size].title, 'max-w-100 truncate font-bold')}>{label}</span>}
                {description && <span className={clsx(sizes[size].subtitle)}>{description}</span>}
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
  )
}
