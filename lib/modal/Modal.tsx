import Button from '@/button/Button.tsx';
import { Cross } from '@/icon';
import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';

export type ModalAction<T = unknown, E = T> = {
  text: string;
  variant?: 'primary' | 'secondary' | 'gradient';
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
};

export default function Modal<T = unknown, E = T>({
  onClose,
  onOpen = () => {},
  actions = [],
  title,
  children,
}: Props<T, E>) {
  const [pending, setPending] = useState<boolean>(false);

  useEffect(() => {
    onOpen();
  }, []);

  // primary buttons to the left
  actions.sort((a) => (a.variant === 'primary' ? 1 : -1));

  const hasButtons = Boolean(actions.length);
  return (
    <Dialog open autoFocus transition onClose={onClose}>
      <DialogBackdrop className={`fixed inset-0 bg-black/70 w-screen flex items-center justify-center`}>
        <DialogPanel className={clsx(`box-border w-1/2 bg-white opacity-100 rounded-md`)}>
          {title && (
            <DialogTitle
              className={`flex items-center justify-between w-full rounded-t-md p-4 bg-primary text-white font-semibold`}
            >
              <h2>{title}</h2>
              <CloseButton className={`cursor-pointer`}>
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
          <div className={`rounded-b-md p-4 flex justify-end gap-2`}>
            {hasButtons &&
              actions.map(({ text, action, onSuccess, onError, variant }) => {
                return (
                  <Button
                    variant={variant || 'primary'}
                    size={'small'}
                    onClick={() => {
                      const maybePromise = action();
                      if (typeof maybePromise?.then === 'function') {
                        {
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
                      }
                    }}
                  >
                    {pending ? 'loading animation' : text}
                  </Button>
                );
              })}
          </div>
        </DialogPanel>
      </DialogBackdrop>
    </Dialog>
  );
}
