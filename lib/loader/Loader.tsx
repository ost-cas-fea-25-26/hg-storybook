import { ComponentSize } from '@/common/types.ts'
import clsx from 'clsx'
import React from 'react'

type Props = {
  size: ComponentSize
  color: 'primary' | 'secondary' | 'white'
}

export default function Loader({ size = 'medium', color }: Props) {
  const sizes = {
    small: 'w-2 h-2',
    medium: 'w-2.5 h-2.5',
    large: 'w-3 h-3',
  }
  const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    white: 'bg-white',
  }

  const gaps = {
    small: 'gap-2',
    medium: 'gap-2.5',
    large: 'gap-3',
  }

  return (
    <div className={clsx(gaps[size], 'flex h-full min-h-5 w-full min-w-8 items-center justify-center')}>
      <div className={clsx(sizes[size], colors[color], `animate-loader-1 rounded-full`)}></div>
      <div className={clsx(sizes[size], colors[color], `animate-loader-2 rounded-full`)}></div>
      <div className={clsx(sizes[size], colors[color], `animate-loader-4 rounded-full`)}></div>
      <div className={clsx(sizes[size], colors[color], `animate-loader-3 rounded-full`)}></div>
    </div>
  )
}
