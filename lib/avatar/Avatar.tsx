import { Pen } from '@/icon'
import clsx from 'clsx'
import React from 'react'

export interface Props {
  src?: string
  size?: 'small' | 'medium' | 'large'
  editButton?: boolean
  onEdit?: () => void
  editAriaLabel?: string
  borderless?: boolean
}

export default function Avatar({ src, size = 'medium', editButton, onEdit, editAriaLabel, borderless }: Props) {
  const defaultClassNames = 'rounded-full object-cover bg-gray-200 bg-primary-200 relative'

  const borderClass = borderless ? 'outline-0' : 'outline-slate-100 outline-[6px]'

  const sizeClasses = {
    small: 'size-16',
    medium: 'size-24',
    large: 'size-40',
  }

  const editButtonSizeClasses = {
    small: 'p-2',
    medium: 'p-3',
    large: 'p-4',
  }

  const editIconSizeClasses = {
    small: 'size-2',
    medium: 'size-3',
    large: 'size-4',
  }

  return (
    <div className={clsx(defaultClassNames, borderClass, sizeClasses[size])}>
      {src ? <img src={src} alt="Avatar" className="w-full h-full rounded-full object-cover" /> : <div />}
      {editButton && (
        <button
          className={clsx(
            editButtonSizeClasses[size],
            'absolute bottom-0 right-0 bg-slate-600 rounded-full cursor-pointer'
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
