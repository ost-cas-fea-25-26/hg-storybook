import { Label as HeadlessLabel } from '@headlessui/react'
import React, { ComponentProps, ReactNode } from 'react'

export interface Props extends ComponentProps<'label'> {
  children: ReactNode
}

export default function Label({ children, ...props }: Props) {
  return (
    <HeadlessLabel className="mb-1 font-semibold text-slate-700 inline-block" {...props}>
      {children}
    </HeadlessLabel>
  )
}
