import { ButtonProps } from '@/button/Button.tsx'
import { VARIANTS } from '@/button/common/styleMappings.ts'
import { ComponentSize, IconSize } from '@/common/types.ts'
import { IconProps } from '@/icon'
import { Button as HeadlessButton } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactElement } from 'react'

interface Props extends ButtonProps {
  icon: ReactElement<IconProps>
}

const sizes: Record<ComponentSize, { icon: IconSize; class: string }> = {
  small: {
    class: 'p-1 px-2 gap-2 rounded',
    icon: 'xs',
  },
  medium: {
    class: 'p-3 flex-col min-w-20 rounded',
    icon: 's',
  },
  large: {
    class: 'py-4 px-5 flex-col min-w-25 rounded',
    icon: 'm',
  },
}

export default function IconButton({ icon, name, children, size = 'medium', variant, onClick, disabled }: Props) {
  const defaultStyle = 'flex truncate items-center transition-all duration-500 font-sans font-600 flex gap-2 cursor-pointer'

  return (
    <HeadlessButton
      name={name}
      aria-label={name}
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return
        onClick?.(e)
      }}
      className={clsx(defaultStyle, VARIANTS.button[variant], sizes[size].class)}
    >
      <div>
        {React.cloneElement(icon, {
          color: VARIANTS.iconColor[variant],
          size: sizes[size].icon,
        })}
      </div>
      {children}
    </HeadlessButton>
  )
}
