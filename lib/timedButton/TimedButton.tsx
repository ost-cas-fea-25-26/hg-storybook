import { Button as HeadlessButton } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'

type Props = {
  animationDuration: number
  children: ReactNode
  onClick: (e?: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<void>
  childrenOnClick: ReactNode
  childrenOnError?: ReactNode
  disabled?: boolean
}

export default function TimedButton({
  animationDuration = 1500,
  children,
  childrenOnClick,
  childrenOnError,
  onClick = () => {},
  disabled = false,
}: Props) {
  const [animating, setAnimating] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  const onClickInternal = () => {
    if (disabled) return
    setAnimating(true)
    const maybePromise = onClick()
    if (typeof maybePromise?.then === 'function') {
      return maybePromise
        .then(() => setAnimating(false))
        .catch(() => {
          setAnimating(false)
          setError(true)
          setTimeout(() => setError(false), animationDuration)
        })
    } else {
      setTimeout(() => {
        setAnimating(false)
      }, animationDuration)
    }
  }

  const disabledClassName = 'cursor-not-allowed opacity-80 hover:bg-white';

  return (
    <HeadlessButton
      className={clsx(
        `cursor-pointer duration-200 font-semibold px-3 py-1 flex justify-center hover:bg-slate-100 items-center gap-2 text-slate-600 rounded-full`,
        { [disabledClassName]: disabled }
      )}
      onClick={onClickInternal}
    >
      {error ? childrenOnError : animating ? childrenOnClick : children}
    </HeadlessButton>
  )
}
