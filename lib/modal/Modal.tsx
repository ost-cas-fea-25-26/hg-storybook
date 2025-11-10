import Button from '@/button/Button.tsx'
import { ButtonVariant } from '@/button/common/types.ts'
import { Cross } from '@/icon'
import { Loader } from '@/index.ts'
import { CloseButton, Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactNode, useEffect, useState } from 'react'

export type ModalAction<T = unknown, E = T> = {
  text: string
  button: {
    type?: 'button' | 'submit' | 'reset'
    variant: ButtonVariant
  }
  action?: () => void | Promise<T>
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'gradient'
  onSuccess?: (promiseResult: T) => void
  onError?: (promiseResult: E) => void
}

type Props<T = unknown, E = T> = {
  onClose: () => void
  children: ReactNode
  onOpen?: () => void
  actions?: ModalAction<T, E>[]
  title?: string
  'data-testid'?: string
}

export default function Modal<T = unknown, E = T>({
  onClose,
  onOpen = () => {},
  actions = [],
  title,
  children,
  'data-testid': testId,
}: Props<T, E>) {
  const [pending, setPending] = useState<boolean>(false)
  useEffect(() => {
    onOpen()
  }, [])

  const hasButtons = Boolean(actions.length)
  return (
    <Dialog
      open
      data-testid={testId}
      autoFocus
      transition
      onClose={onClose}
      className={'@container fixed inset-0 flex w-screen items-center justify-center'}
    >
      <DialogBackdrop className={`fixed inset-0 bg-black/70`} />
      <DialogPanel
        autoFocus
        data-testid={`${testId}-modal`}
        className={clsx(
          `autofocus z-10 w-9/10 rounded-md bg-white opacity-100 @min-sm:w-2/3 @min-lg:w-120 @min-lg:max-w-prose`
        )}
      >
        {title && (
          <DialogTitle
            className={`bg-primary flex w-full items-center justify-between rounded-t-md p-4 font-semibold text-white`}
          >
            <>{title}</>
            <CloseButton data-testid={`${testId}-close-button`} className={`cursor-pointer`}>
              <Cross color="white" size={'xs'} />
            </CloseButton>
          </DialogTitle>
        )}
        <div
          className={clsx(`border-r-1 border-l-1 border-gray-300 p-4`, {
            [`rounded-b-md border-b-1`]: !hasButtons,
          })}
        >
          {children}
        </div>
        {hasButtons && (
          <div className={`flex justify-end gap-2 rounded-b-md p-4`}>
            {hasButtons &&
              actions.map(({ text, action, disabled, onSuccess, onError, button }) => {
                const onClick = () => {
                  const maybePromise = action?.()
                  if (typeof maybePromise?.then === 'function') {
                    setPending(true)
                    maybePromise
                      .then((result: T) => {
                        setPending(false)
                        onSuccess?.(result)
                      })
                      .catch((error: E) => {
                        setPending(false)
                        onError?.(error)
                      })
                  }
                }

                return (
                  <Button
                    key={text}
                    variant={button.variant || 'primary'}
                    size={'small'}
                    onClick={onClick}
                    disabled={disabled}
                  >
                    {pending ? <Loader size={'small'} color={'white'} /> : text}
                  </Button>
                )
              })}
          </div>
        )}
      </DialogPanel>
    </Dialog>
  )
}
