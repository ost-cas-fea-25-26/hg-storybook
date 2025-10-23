import { Size } from '@/common';
import { Variant } from '@/common/Variant.ts';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode, useMemo } from 'react';

interface Props {
  variant: Variant;
  size: Size;
  onClick?: () => void;
  children?: ReactNode;
  rounded?: boolean;
}

export default function Button({ children, size = Size.MEDIUM, variant, onClick, rounded }: Props) {
  const defaultStyle =
    'transition-all duration-500 text-white font-medium font-sans font-600 flex gap-2 cursor-pointer focus:outline focus:outline-4';

  const variantClassname = useMemo(() => {
    if (variant === Variant.PRIMARY) {
      return 'bg-primary hover:bg-primary-700 active:bg-primary-800 focus:outline-primary-200';
    } else if (variant === Variant.SECONDARY) {
      return 'bg-secondary hover:bg-secondary-700 active:bg-secondary-800 focus:outline-secondary-200';
    } else if (variant === Variant.GRADIENT) {
      return 'bg-gradient-to-r from-pink-500 to-primary hover:from-[-12%] hover:to-[62%] active:from-[-15%] active:to-[40%] focus:outline-primary-200';
    }
  }, [variant]);

  const sizeClassname = useMemo(() => {
    if (size === Size.SMALL) return 'p-2';
    if (size === Size.MEDIUM) return 'p-3';
    if (size === Size.LARGE) return 'py-4 px-5';
  }, [size]);

  const roundedClassName = rounded ? 'rounded-full' : 'rounded-md';
  return (
    <HeadlessButton onClick={onClick} className={clsx(defaultStyle, variantClassname, sizeClassname, roundedClassName)}>
      {children}
    </HeadlessButton>
  );
}
