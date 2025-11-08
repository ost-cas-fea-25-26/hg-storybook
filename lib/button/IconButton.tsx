import { VARIANTS } from '@/button/common/styleMappings.ts';
import { IconProps, IconSize } from '@/icon';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'gradient' | 'white' | 'black';

type Size = 'medium' | 'small' | 'large';
type Props = {
  background: Variant;
  textColor?: Variant;
  size: Size;
  icon: ReactElement<IconProps>;
  onClick?: () => void;
  children?: ReactNode;
  rounded?: boolean;
};

const sizes: Record<Size, { icon: IconSize; class: string }> = {
  small: {
    class: 'p-1 px-2 gap-2 rounded-md',
    icon: 'xs',
  },
  medium: {
    class: 'p-3 flex-col min-w-20 rounded-md',
    icon: 's',
  },
  large: {
    class: 'py-4 px-5 flex-col min-w-25 rounded-md',
    icon: 'm',
  },
};

export default function IconButton({
  icon,
  children,
  size = 'medium',
  background,
  textColor = 'white',
  onClick,
}: Props) {
  const defaultStyle =
    'flex truncate items-center transition-all duration-500 font-medium font-sans font-600 flex gap-2 cursor-pointer focus:outline focus:outline-4';

  return (
    <HeadlessButton
      onClick={onClick}
      className={clsx(defaultStyle, VARIANTS.background[background], VARIANTS.text[textColor], sizes[size].class)}
    >
      <div>
        {React.cloneElement(icon, {
          color: VARIANTS.icon[textColor],
          size: sizes[size].icon,
        })}
      </div>
      {children}
    </HeadlessButton>
  );
}
