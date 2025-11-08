import Button from '@/button/Button.tsx';
import { ButtonVariant } from '@/button/common/types.ts';
import { Cross } from '@/icon';
import { Loader } from '@/index.ts';
import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';

export type ModalAction<T = unknown, E = T> = {
  text: string;
  button: {
    background: ButtonVariant;
    textColor: ButtonVariant;
  };
  action: () => void | Promise<T>;
  onSuccess?: (promiseResult: T) => void;
  onError?: (promiseResult: E) => void;
};

type Props<T = unknown, E = T> = {
  onClose: () => void;
  children: ReactNode;
  onOpen?: () => void;
  actions?: ModalAction<T, E>[];
  title?: string;
  'data-testid'?: string;
};

export default function Modal<T = unknown, E = T>({
  onClose,
  onOpen = () => {},
  actions = [],
  title,
  children,
  'data-testid': testId,
}: Props<T, E>) {
  const [pending, setPending] = useState<boolean>(false);
  useEffect(() => {
    onOpen();
  }, []);

  const hasButtons = Boolean(actions.length);
  return (
    <Dialog
      open
      data-testid={testId}
      autoFocus
      transition
      onClose={onClose}
      className={'@container fixed inset-0 w-screen flex items-center justify-center'}
    >
      <DialogBackdrop className={`fixed inset-0 bg-black/70`} />
      <DialogPanel
        autoFocus
        data-testid={`${testId}-modal`}
        className={clsx(
          `autofocus box-border z-10 w-9/10 @min-sm:w-2/3 @min-lg:max-w-prose @min-lg:w-120 bg-white opacity-100 rounded-md`
        )}
      >
        {title && (
          <DialogTitle
            className={`flex items-center justify-between w-full rounded-t-md p-4 bg-primary text-white font-semibold`}
          >
            <>{title}</>
            <CloseButton data-testid={`${testId}-close-button`} className={`cursor-pointer`}>
              <Cross color="white" size={'xs'} />
            </CloseButton>
          </DialogTitle>
        )}
        <div
          className={clsx(`p-4 border-l-1 border-r-1 border-gray-300`, {
            [`rounded-b-md border-b-1`]: !hasButtons,
          })}
        >
          {children}
        </div>
        {hasButtons && (
          <div className={`rounded-b-md p-4 flex justify-end gap-2`}>
            {hasButtons &&
              actions.map(({ text, action, onSuccess, onError, button }) => {
                const onClick = () => {
                  const maybePromise = action();
                  if (typeof maybePromise?.then === 'function') {
                    setPending(true);
                    maybePromise
                      .then((result: T) => {
                        setPending(false);
                        onSuccess?.(result);
                      })
                      .catch((error: E) => {
                        setPending(false);
                        onError?.(error);
                      });
                  }
                };

                return (
                  <Button
                    background={button.background || 'primary'}
                    textColor={button.textColor || 'white'}
                    size={'small'}
                    onClick={onClick}
                  >
                    {pending ? <Loader size={'small'} color={'white'} /> : text}
                  </Button>
                );
              })}
          </div>
        )}
      </DialogPanel>
    </Dialog>
  );
}
