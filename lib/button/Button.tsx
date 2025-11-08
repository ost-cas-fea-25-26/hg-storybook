import { VARIANTS } from '@/button/common/styleMappings.ts';
import { ButtonVariant } from '@/button/common/types.ts';
import { TEXT } from '@/common/constants.ts';
import { ComponentSize, TextColor } from '@/common/types.ts';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { MouseEventHandler, ReactNode } from 'react';

export type ButtonProps = {
  background: ButtonVariant;
  textColor?: TextColor;
  size: ComponentSize;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children?: ReactNode;
  rounded?: boolean;
  width?: 'w-fit' | 'w-full';
  disabled?: boolean;
};

const sizes: Record<ComponentSize, string> = {
  small: 'p-2',
  medium: 'p-3',
  large: 'py-4 px-5',
};

export default function Button({
  children,
  size = 'medium',
  background,
  textColor = 'white',
  onClick,
  rounded,
                                 width,
                                 disabled,
                               }: ButtonProps) {
  const defaultStyle = 'transition-all duration-500 font-medium font-sans font-600 flex gap-2 cursor-pointer';

  const roundedClassName = rounded ? 'rounded-full' : 'rounded-md';
  return (
    <HeadlessButton
      onClick={(e) => !disabled && onClick?.(e)}
      className={clsx(
        defaultStyle,
        VARIANTS.background[background],
        TEXT[textColor],
        width,
        roundedClassName,
        sizes[size],
        disabled ? 'cursor-not-allowed opacity-50 ' : 'cursor-pointer'
      )}
    >
      {children}
    </HeadlessButton>
  );
}
