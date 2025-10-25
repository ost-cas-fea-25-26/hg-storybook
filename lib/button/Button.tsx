import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'gradient';
type Size = 'medium' | 'small' | 'large';

interface Props {
  variant: Variant;
  size: Size;
  onClick?: () => void;
  children?: ReactNode;
  rounded?: boolean;
}

const variants: Record<Variant, string> = {
  primary: 'bg-primary hover:bg-primary-700 active:bg-primary-800 focus:outline-primary-200',
  secondary: 'bg-secondary hover:bg-secondary-700 active:bg-secondary-800 focus:outline-secondary-200',
  gradient:
    'bg-linear-(--gradient-50-50) hover:bg-linear-(--gradient-30-70) active:bg-linear-(--gradient-20-80) focus:outline-primary-200',
};

const sizes: Record<Size, string> = {
  small: 'p-2',
  medium: 'p-3',
  large: 'py-4 px-5',
};

export default function Button({ children, size = 'medium', variant, onClick, rounded }: Props) {
  const defaultStyle =
    'transition-all duration-500 text-white font-medium font-sans font-600 flex gap-2 cursor-pointer focus:outline focus:outline-4';

  const roundedClassName = rounded ? 'rounded-full' : 'rounded-md';
  return (
    <HeadlessButton onClick={onClick} className={clsx(defaultStyle, variants[variant], roundedClassName, sizes[size])}>
      {children}
    </HeadlessButton>
  );
}
