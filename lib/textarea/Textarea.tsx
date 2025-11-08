import { Textarea as HeadlessTextarea } from '@headlessui/react';
import clsx from 'clsx';
import React, { ComponentProps, useId } from 'react';

export interface Props extends ComponentProps<'textarea'> {
  error?: string;
}

export default function Textarea({ error, ...props }: Props) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;
  const defaultStyle =
    'border-none rounded-md p-4 text-slate-700 text-base placeholder:text-slate-300 placeholder:font-medium font-medium bg-slate-100 disabled:cursor-not-allowed disabled:hover:outline-slate-200 min-h-[60px]';

  const hasErrorClassNames = error
    ? 'outline-2 outline-red-600'
    : 'outline-1 outline-slate-200 hover:outline-primary-600';

  return (
    <div className="w-max">
      <div className="relative w-max">
        <HeadlessTextarea
          className={clsx(defaultStyle, hasErrorClassNames)}
          aria-invalid={!!error}
          aria-describedby={errorId}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 text-right font-medium" role="alert" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}
