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
      className={clsx('font-semibold cursor-pointer hover:underline underline-offset-4 rounded', TEXT[color])}
      href={url}
      {...props}
    >
      {children}
    </a>
  )
}
