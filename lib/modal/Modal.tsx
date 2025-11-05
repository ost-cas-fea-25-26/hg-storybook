import Button from '@/button/Button.tsx';
import { ComponentSize } from '@/common/types.ts';
import { Cross } from '@/icon';
import { Loader } from '@/index.ts';
import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';

export type ModalAction<T = unknown, E = T> = {
  text: string;
  action: () => void | Promise<T>;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'gradient';
  onSuccess?: (promiseResult: T) => void;
  onError?: (promiseResult: E) => void;
};

type Props<T = unknown, E = T> = {
  onClose: () => void;
  children: ReactNode;
  onOpen?: () => void;
  actions?: ModalAction<T, E>[];
  title?: string;
  size?: ComponentSize;
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

  const hasButtons = Boolean(actions.length);
  return (
    <Dialog open autoFocus transition onClose={onClose}>
      <DialogBackdrop className={`fixed inset-0 bg-black/70 w-screen flex items-center justify-center`}>
        <DialogPanel className={clsx(`box-border max-w-1/2 bg-white opacity-100 rounded-md flex flex-col`)}>
          {title && (
            <DialogTitle
              className={`flex items-center justify-between w-full rounded-t-md p-4 bg-primary text-white font-semibold`}
            >
              <span>{title}</span>
              <CloseButton className={`cursor-pointer`}>
                <Cross color="white" size={'xs'} />
              </CloseButton>
            </DialogTitle>
          )}
          <div
            className={clsx(
              `p-4 border-l-1 border-r-1 border-gray-300`,
              hasButtons ? 'flex-grow-1' : 'rounded-b-md border-b-1'
            )}
          >
            {children}
          </div>
          {hasButtons && (
            <div className={`rounded-b-md p-4 self-end flex justify-end gap-2`}>
              {actions.map(({ text, action, disabled, onSuccess, onError, variant }) => {
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
                    key={text}
                    variant={variant || 'primary'}
                    size={'small'}
                    onClick={onClick}
                    disabled={disabled}
                  >
                    {pending ? <Loader size={'small'} color={'white'} /> : text}
                  </Button>
                );
              })}
            </div>
          )}
        </DialogPanel>
      </DialogBackdrop>
    </Dialog>
  );
}
