import { Button, Input as HeadlessInput } from '@headlessui/react';
import clsx from 'clsx';
import React, { ComponentProps, MouseEventHandler, ReactNode, useId } from 'react';

export interface Props extends ComponentProps<'input'> {
  icon?: ReactNode;
  iconAction?: MouseEventHandler<HTMLButtonElement>;
  error?: string;
}

export default function Input({ icon, error, iconAction, ...props }: Props) {
  const id = useId();
  const errorId = error ? `${id}-error` : undefined;
  const defaultStyle =
    'border-secondary-300 focus:border-transparent border-2 border-solid rounded-md p-4 text-slate-700 text-base font-semibold custom-placeholder disabled:custom-disabled';

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
        {icon && (
          <Button
            aria-label="input field icon button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              iconAction?.(e);
            }}
            className={clsx(
              'border-0 p-0 m-0 bg-transparent absolute top-1/2 right-4 -translate-y-1/2  rounded-sm',
              Boolean(iconAction) && 'cursor-pointer'
            )}
          >
            {icon}
          </Button>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600 text-right font-medium" role="alert" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
}
