import PlaceholderPanda from './placeholder_panda.svg?react';
import React from 'react';

type IconProps = { height: number; width: number; color?: string; fill?: string; stroke?: string };
const ICONS: Record<IconType, React.FC<IconProps>> = { placeholder_panda: PlaceholderPanda };
export enum IconType {
  PLACEHOLDER_PANDA = 'placeholder_panda',
}
export function getIcon(icon: IconType): React.FC<IconProps> {
  return ICONS[icon];
}
