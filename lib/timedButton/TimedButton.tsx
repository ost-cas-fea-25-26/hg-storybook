'use client'

import { Button as HeadlessButton } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'

type Props = {
  animationDuration: number
  children: ReactNode
  onClick: (e?: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<void>
  childrenOnClick: ReactNode
  childrenOnError?: ReactNode
  childrenOnSuccess?: ReactNode
  disabled?: boolean
}

export default function TimedButton({
  animationDuration = 1500,
  children,
  childrenOnClick,
  childrenOnError,
  childrenOnSuccess,
  onClick = () => {},
  disabled = false,
}: Props) {
  const [state, setState] = useState<'error' | 'animating' | 'success' | 'idle'>('idle')

  const onClickInternal = () => {
    if (disabled) return
    setState('animating')
    const maybePromise = onClick()
    if (typeof maybePromise?.then === 'function') {
      return maybePromise
        .then(() => {
          setState('success')
          setTimeout(() => setState('idle'), animationDuration)
        })
        .catch(() => {
          setState('error')
          setTimeout(() => setState('idle'), animationDuration)
        })
    } else {
      setTimeout(() => {
        setState('idle')
      }, animationDuration)
    }
  }

  const disabledClassName = 'cursor-not-allowed opacity-80 hover:bg-white'

  return (
    <HeadlessButton
      className={clsx(
        `flex cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-1 font-semibold text-slate-600 duration-200 hover:bg-slate-100`,
        { [disabledClassName]: disabled }
      )}
      onClick={onClickInternal}
    >
      {state === 'idle' && children}
      {state === 'error' && childrenOnError}
      {state === 'success' && childrenOnSuccess}
      {state === 'animating' && childrenOnClick}
    </HeadlessButton>
  )
}
