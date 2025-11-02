import { IconProps } from '@/icon';
import { Checkbox, Field, Label } from '@headlessui/react';
import clsx from 'clsx';
import React, { ReactElement, useState } from 'react';

type Props = {
  onChange?: () => void;
  disabled?: boolean;
  color: 'primary' | 'contrast';
  checkedProps: {
    icon: ReactElement<IconProps>;
    label: string;
  };
  uncheckedProps?: {
    icon: ReactElement<IconProps>;
    label: string;
  };
};

export default function Toggle({
  checkedProps,
  uncheckedProps,
  onChange = () => {},
  disabled = false,
  color = 'primary',
}: Props) {
  const [enabled, setEnabled] = useState(false);

  const actualColor = enabled ? color : 'secondary';

  const colors = {
    primary: {
      enabled: `text-primary hover:not-data-disabled:bg-primary-50 hover:not-data-disabled:text-primary-700`,
      default: `text-secondary hover:not-data-disabled:bg-primary-50 hover:not-data-disabled:text-primary-700`,
    },
    contrast: {
      enabled: 'text-contrast hover:not-data-disabled:bg-contrast-50 hover:not-disabled:text-contrast-700',
      default: `text-secondary hover:not-data-disabled:bg-contrast-50 hover:not-disabled:text-contrast-700`,
    },
  };
  const hoverClasses = `group-data-disabled:hover:cursor-not-allowed hover:not-data-disabled:cursor-pointer`;
  return (
    <Field disabled={disabled} className={clsx(hoverClasses, 'max-w-fit')}>
      <Checkbox
        disabled={disabled}
        className={clsx(
          enabled ? colors[color].enabled : colors[color].default,
          'data-disabled:opacity-50 rounded-full p-1 pl-2 pr-2 flex not-data-disabled:font-bold items-center gap-1'
        )}
        checked={enabled}
        onChange={() => {
          onChange();
          setEnabled(!enabled);
        }}
      >
        {enabled
          ? React.cloneElement(checkedProps.icon, {
              'data-testid': 'checkbox-icon-on',
              color: actualColor,
              className: clsx(colors[color].enabled),
            })
          : uncheckedProps
            ? React.cloneElement(uncheckedProps.icon, {
                'data-testid': 'checkbox-icon-off',
                color: actualColor,
                className: clsx(colors[color].default),
              })
            : React.cloneElement(checkedProps.icon, {
                'data-testid': 'checkbox-icon-off',
                color: actualColor,
                className: clsx(colors[color].default),
              })}
        <Label className={clsx(hoverClasses)}>
          {enabled ? checkedProps.label : uncheckedProps?.label || checkedProps.label}
        </Label>
      </Checkbox>
    </Field>
  );
}
