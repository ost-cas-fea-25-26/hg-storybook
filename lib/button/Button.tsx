import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode, useMemo } from 'react';

interface Props {
  variant: 'primary' | 'secondary' | 'gradient';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  children?: ReactNode;
  circle?: boolean;
}

export default function Button({ children, size, variant, onClick, circle }: Props) {
  const defaultStyle =
    'transition-all duration-500 text-white font-medium font-sans font-600 flex gap-2 cursor-pointer focus:outline focus:outline-4';

  const variantClassname = useMemo(() => {
    if (variant === 'primary') {
      return 'bg-primary hover:bg-primary-700 active:bg-primary-800 focus:outline-primary-200';
    } else if (variant === 'secondary') {
      return 'bg-secondary hover:bg-secondary-700 active:bg-secondary-800 focus:outline-secondary-200';
    } else if (variant === 'gradient') {
      return 'bg-linear-to-r from-pink-500 to-primary hover:from-[-12%] hover:to-62% active:from-[-15%] active:to-40% focus:outline-primary-200';
    }
  }, [variant]);

  const sizeClassname = useMemo(() => {
    if (size === 'small') {
      return 'p-2';
    } else if (size === 'medium') {
      return 'p-3';
    } else if (size === 'large') {
      return 'py-4 px-5';
    }
  }, [size]);

  const circleClassname = useMemo(() => {
    if (circle) {
      return 'rounded-full';
    }
    return 'rounded-md';
  }, [circle]);

  return (
    <HeadlessButton onClick={onClick} className={clsx(defaultStyle, circleClassname, variantClassname, sizeClassname)}>
      {children}
    </HeadlessButton>
  );
}
