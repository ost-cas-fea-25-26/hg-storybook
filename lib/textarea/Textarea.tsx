'use client'

import { Textarea as HeadlessTextarea } from '@headlessui/react'
import clsx from 'clsx'
import React, { ComponentProps, useId } from 'react'

export interface Props extends ComponentProps<'textarea'> {
  error?: string
}

export default function Textarea({ error, className, ...props }: Props) {
  const id = useId()
  const errorId = error ? `${id}-error` : undefined
  const defaultStyle =
    'w-full border-2 border-solid border-secondary-300 focus:border-transparent rounded p-4 text-slate-700 text-base custom-placeholder font-medium disabled:custom-disabled min-h-[60px]'

  const hasErrorClassNames = error ? 'outline-2 outline-red-600' : 'hover:outline-2 hover:outline-primary-600 '

  return (
    <>
      <HeadlessTextarea
        {...props}
        aria-invalid={!!error}
        aria-describedby={errorId}
        className={clsx(defaultStyle, hasErrorClassNames, className)}
      />
      {error && (
        <p className="mt-1 text-right text-sm font-medium" role="alert" id={errorId}>
          {error}
        </p>
      )}
    </>
  )
}
