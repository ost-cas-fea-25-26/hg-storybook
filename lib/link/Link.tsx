import React, { ComponentProps, ReactNode } from 'react';


export interface Props extends ComponentProps<'a'> {
  url: string;
  children: ReactNode;
}

export default function Link({ url, children, ...props }: Props) {
  return (
    <a className="text-primary font-semibold cursor-pointer hover:underline underline-offset-4 focus:outline-primary focus:outline-solid focus:outline-1" href={url} {...props}>
          { children }
    </a>
  );
}