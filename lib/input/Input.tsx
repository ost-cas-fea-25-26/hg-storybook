import { Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';
import React, { ComponentProps, ReactNode, useId } from 'react';

export interface Props extends ComponentProps<'input'> {
  icon?: ReactNode;
  error?: string;
}

export default function Input({ icon, error, ...props }: Props) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;
  const defaultStyle =
    'border-none rounded-md p-4 text-slate-700 text-base placeholder:text-slate-300 placeholder:font-medium font-semibold disabled:bg-slate-50 disabled:cursor-not-allowed disabled:hover:outline-slate-200';

  const hasIconClassNames = icon ? 'pr-10' : '';
  const hasErrorClassNames = error
    ? 'outline-2 outline-red-600'
    : 'outline-1 outline-slate-200 hover:outline-primary-600';

  return (
    <div className="w-max">
      <div className="relative w-max">
        <HeadlessInput
          className={clsx(defaultStyle, hasIconClassNames, hasErrorClassNames)}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
        />
        {icon && <div className="absolute top-1/2 right-4 -translate-y-1/2">{icon}</div>}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 text-right font-medium" role="alert" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}
