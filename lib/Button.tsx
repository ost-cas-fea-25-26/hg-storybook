import { Button } from '@radix-ui/themes';
import React from 'react';

export interface ButtonProps {
  label: string;
}

/** Primary UI component for user interaction */

export default ({ label }: ButtonProps) => {
  return (
    <Button className={'bg-primary'} size={'4'}>
      {label}
    </Button>
  );
};
