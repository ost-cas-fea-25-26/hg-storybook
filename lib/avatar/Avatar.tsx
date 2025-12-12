'use client'

import { IconSize } from '@/common/types.ts'
import { Pen } from '@/icon'
import clsx from 'clsx'
import React from 'react'

export interface Props {
  src?: string
  size?: IconSize
  editButton?: boolean
  onEdit?: () => void
  editAriaLabel?: string
  borderless?: boolean
}

export default function Avatar({ src, size = 'l', editButton, onEdit, editAriaLabel, borderless }: Props) {
  const defaultClassNames = 'rounded-full object-cover bg-primary-200 relative'

  const borderClass = borderless ? 'outline-0' : 'outline-slate-100 outline-[6px]'

  const sizeClasses = {
    xs: 'size-8',
    s: 'size-12',
    m: 'size-16',
    l: 'size-24',
    xl: 'size-40',
  }

  const editButtonSizeClasses = {
    xs: 'p-1',
    s: 'p-1.5',
    m: 'p-2',
    l: 'p-3',
    xl: 'p-4',
  }

  const editIconSizeClasses = {
    xs: 'size-1',
    s: 'size-2',
    m: 'size-3',
    l: 'size-4',
    xl: 'size-4',
  }

  return (
    <div className={clsx(defaultClassNames, borderClass, sizeClasses[size])}>
      {src ? <img src={src} alt="Avatar" className="h-full w-full rounded-full object-cover" /> : <div />}
      {editButton && (
        <button
          className={clsx(
            editButtonSizeClasses[size],
            'bg-secondary absolute right-0 bottom-0 cursor-pointer rounded-full'
          )}
          onClick={onEdit}
          aria-label={editAriaLabel || 'Edit Avatar'}
        >
          <Pen color="white" className={editIconSizeClasses[size]} />
        </button>
      )}
    </div>
  )
}
