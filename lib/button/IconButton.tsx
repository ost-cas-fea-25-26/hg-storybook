import { ButtonProps } from '@/button/Button.tsx';
import { VARIANTS } from '@/button/common/styleMappings.ts';
import { ComponentSize, IconSize } from '@/common/types.ts';
import { IconProps } from '@/icon';
import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface Props extends ButtonProps {
  icon: ReactElement<IconProps>;
}

const sizes: Record<ComponentSize, { icon: IconSize; class: string }> = {
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
  disabled,
}: Props) {
  const defaultStyle =
    'flex truncate items-center transition-all duration-500 font-medium font-sans font-600 flex gap-2 cursor-pointer';

  return (
    <HeadlessButton
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
      }}
      className={clsx(
        defaultStyle,
        VARIANTS.background[background],
        VARIANTS.text[textColor],
        sizes[size].class,
        'custom-focus-black custom-disabled'
      )}
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
