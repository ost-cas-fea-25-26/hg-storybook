import clsx from 'clsx';
import React from 'react';

type Props = {
  size: 'small' | 'medium' | 'large';
  color: 'primary' | 'secondary' | 'white';
};

export default function Loader({ size = 'medium', color }: Props) {
  const sizes = {
    small: 'w-2 h-2',
    medium: 'w-2.5 h-2.5',
    large: 'w-3 h-3',
  };
  const colors = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    gradient: 'bg-gradient',
    white: 'bg-white',
  };

  const gaps = {
    small: 'gap-2',
    medium: 'gap-2.5',
    large: 'gap-3',
  };

  return (
    <div className={clsx(gaps[size], 'w-full h-full min-h-5 min-w-8 flex items-center justify-center')}>
      <div className={clsx(sizes[size], colors[color], `rounded-full animate-loader-1`)}></div>
      <div className={clsx(sizes[size], colors[color], `rounded-full animate-loader-2`)}></div>
      <div className={clsx(sizes[size], colors[color], `rounded-full animate-loader-4`)}></div>
      <div className={clsx(sizes[size], colors[color], `rounded-full animate-loader-3`)}></div>
    </div>
  );
}
