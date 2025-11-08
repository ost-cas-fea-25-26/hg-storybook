import { VARIANTS } from '@/button/common/styleMappings.ts';
import { ButtonVariant } from '@/button/common/types.ts';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Size = 'medium' | 'small' | 'large';
interface Props {
  background: ButtonVariant;
  textColor?: ButtonVariant;
  size: Size;
  onClick?: () => void;
  children?: ReactNode;
  rounded?: boolean;
}

const sizes: Record<Size, string> = {
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
}: Props) {
  const defaultStyle =
    'transition-all duration-500 font-medium font-sans font-600 flex gap-2 cursor-pointer focus:outline focus:outline-4';

  const roundedClassName = rounded ? 'rounded-full' : 'rounded-md';
  return (
    <HeadlessButton
      onClick={onClick}
      className={clsx(
        defaultStyle,
        VARIANTS.background[background],
        VARIANTS.text[textColor],
        roundedClassName,
        sizes[size]
      )}
    >
      {children}
    </HeadlessButton>
  );
}
