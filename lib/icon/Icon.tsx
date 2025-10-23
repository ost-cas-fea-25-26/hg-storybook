import { getIcon, IconType } from './icons';
import { Size } from '@/common/Size.ts';
import React from 'react';

type Props = {
  iconType: IconType;
  size: Size;
  color?: string;
};

export default function Icon({ iconType, color, size = Size.SMALL }: Props) {
  const ResolvedIcon = getIcon(iconType);

  function get(size: Size) {
    switch (size) {
      case Size.LARGE:
        return 36;
      case Size.MEDIUM:
        return 24;
      case Size.SMALL:
        return 16;
    }
  }

  return <ResolvedIcon height={get(size)} width={get(size)} color={color} stroke={color} fill={color} />;
}
