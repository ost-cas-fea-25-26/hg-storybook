'use client'

import { Button, Input as HeadlessInput } from '@headlessui/react'
import clsx from 'clsx'
import React, { ComponentProps, MouseEventHandler, ReactNode, useId } from 'react'

export interface Props extends ComponentProps<'input'> {
  icon?: ReactNode
  iconAction?: {
    name: string
    action: MouseEventHandler<HTMLButtonElement>
  }
  error?: string
}

export default function Input({ icon, error, iconAction, type, ...props }: Props) {
  const id = useId()
  const errorId = error ? `${id}-error` : undefined
  const defaultStyle =
    'w-full border-secondary-300 focus:border-transparent border-2 border-solid rounded pt-2 pb-2 p-4 text-slate-700 font-semibold custom-placeholder disabled:custom-disabled'

  const hasIconClassNames = icon ? 'pr-10' : ''
  const hasErrorClassNames = error ? 'outline-2 outline-red-600' : 'hover:outline-2 hover:outline-primary-600'

  return (
    <div className="w-full">
      <div className="relative w-full">
        <HeadlessInput
          className={clsx(defaultStyle, hasIconClassNames, hasErrorClassNames)}
          aria-invalid={!!error}
          aria-describedby={errorId}
          type={type}
          {...props}
        />
        {icon && (
          <Button
            aria-label={iconAction?.name}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              iconAction?.action(e)
            }}
            className={clsx(
              'absolute top-1/2 right-4 m-0 -translate-y-1/2 rounded-sm border-0 bg-transparent p-0',
              Boolean(iconAction) && 'cursor-pointer'
            )}
          >
            {icon}
          </Button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-right text-sm font-medium text-red-600" role="alert" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}
