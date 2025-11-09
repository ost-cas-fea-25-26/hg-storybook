import { TEXT } from '@/common/constants.ts'
import { TextColor } from '@/common/types.ts'
import clsx from 'clsx'
import React, { ComponentProps, ReactNode } from 'react'

export interface Props extends ComponentProps<'a'> {
  url: string
  children: ReactNode
  color?: TextColor
}

export default function Link({ url, children, color = 'primary', ...props }: Props) {
  return (
    <a
      className={clsx('cursor-pointer rounded font-semibold underline-offset-4 hover:underline', TEXT[color])}
      href={url}
      {...props}
    >
      {children}
    </a>
  )
}
