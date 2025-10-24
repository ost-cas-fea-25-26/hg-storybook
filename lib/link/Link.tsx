import React from 'react';

type Props = {
  url: string;
  label: string;
} & React.ComponentPropsWithoutRef<'a'>;

export default function Link({ url, label, ...props }: Props) {
  return (
    <a className="text-primary font-semibold cursor-pointer hover:underline underline-offset-4 focus:outline-primary focus:outline-solid focus:outline-1" href={url} {...props}>
      {label}
    </a>
  );
}
