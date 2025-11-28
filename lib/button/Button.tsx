import { VARIANTS } from '@/button/common/styleMappings.ts'
import { ButtonVariant } from '@/button/common/types.ts'
import { ComponentSize } from '@/common/types.ts'
import { Button as HeadlessButton } from '@headlessui/react'
import clsx from 'clsx'
import React, { MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = {
  variant?: ButtonVariant
  name?: string
  size?: ComponentSize
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  children?: ReactNode
  rounded?: boolean
  width?: 'w-fit' | 'w-full'
  type?: 'button' | 'submit'
  disabled?: boolean
}

const sizes: Record<ComponentSize, string> = {
  small: 'p-2',
  medium: 'p-3',
  large: 'py-4 px-5',
}

export default function Button({
  children,
  name,
  size = 'medium',
  variant = 'primary',
  onClick,
  rounded,
  width,
  disabled,
  type = 'button',
}: ButtonProps) {
  const defaultStyle =
    'transition-all duration-500 font-medium font-sans font-600 flex items-center justify-center gap-2'

  const roundedClassName = rounded ? 'rounded-full' : 'rounded'
  return (
    <HeadlessButton
      name={name}
      type={type}
      aria-label={name}
      disabled={disabled}
      onClick={(e) => onClick?.(e)}
      className={clsx(
        defaultStyle,
        VARIANTS.button[variant],
        width,
        roundedClassName,
        sizes[size],
        disabled ? 'custom-disabled' : 'cursor-pointer'
      )}
    >
      {children}
    </HeadlessButton>
  )
}
