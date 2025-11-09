import { Textarea as HeadlessTextarea } from '@headlessui/react'
import clsx from 'clsx'
import React, { ComponentProps, useId } from 'react'

export interface Props extends ComponentProps<'textarea'> {
  error?: string
}

export default function Textarea({ error, ...props }: Props) {
  const id = useId()
  const errorId = error ? `${id}-error` : undefined
  const defaultStyle =
    'w-full border-2 border-solid border-secondary-300 focus:border-transparent rounded p-4 text-slate-700 text-base custom-placeholder font-medium disabled:custom-disabled min-h-[60px]'

  const hasErrorClassNames = error ? 'outline-2 outline-red-600' : 'hover:outline-2 hover:outline-primary-600 '

  return (
    <div className="w-full">
      <div className="relative w-full">
        <HeadlessTextarea
          className={clsx(defaultStyle, hasErrorClassNames)}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-right font-medium" role="alert" id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}
