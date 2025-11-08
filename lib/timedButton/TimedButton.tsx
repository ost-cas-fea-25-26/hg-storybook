import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';

type Props = {
  animationDuration: number;
  children: ReactNode;
  onClick: (e?: React.SyntheticEvent<HTMLButtonElement>) => void | Promise<void>;
  childrenOnClick: ReactNode;
  childrenOnError?: ReactNode;
  disabled?: boolean;
};

/**
 * React Component to Provide timed action on click
 * @param animationDuration the amount of time (ms) the childrenOnClick are displayed.
 * in Async mode: the amount of time the error (in case of rejected Promise) is displayed
 * @param children button content when idle
 * @param childrenOnClick button content when clicked as long as 'animation' in progress
 * @param childrenOnError button content in async mode if the onClick promise is rejected
 * @param onClick action of what happens on click
 * @param disabled if true: nothing happens on click
 * */
export default function TimedButton({
  animationDuration = 1500,
  children,
  childrenOnClick,
  childrenOnError,
  onClick = () => {},
  disabled = false,
}: Props) {
  const [animating, setAnimating] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onClickInternal = () => {
    if (disabled) return;
    setAnimating(true);
    const maybePromise = onClick();
    if (typeof maybePromise?.then === 'function') {
      return maybePromise
        .then(() => setAnimating(false))
        .catch(() => {
          setAnimating(false);
          setError(true);
          setTimeout(() => setError(false), animationDuration);
        });
    } else {
      setTimeout(() => {
        setAnimating(false);
      }, animationDuration);
    }
  };

  const disabledClassName = 'cursor-not-allowed opacity-50';

  return (
    <HeadlessButton
      className={clsx(
        `focus:outline-secondary-200 focus:outline-2 cursor-pointer duration-200 font-semibold flex justify-center items-center gap-2 text-secondary`,
        { [disabledClassName]: disabled }
      )}
      onClick={onClickInternal}
    >
      {error ? childrenOnError : animating ? childrenOnClick : children}
    </HeadlessButton>
  );
}
