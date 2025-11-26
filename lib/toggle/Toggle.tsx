import { IconProps } from '@/icon'
import { Checkbox, Field, Label } from '@headlessui/react'
import clsx from 'clsx'
import React, { ReactElement, useState } from 'react'

type Props = {
  onChange?: () => void
  disabled?: boolean
  initialChecked?: boolean
  color: 'primary' | 'contrast'
  'data-testid'?: string
  checkedProps: {
    icon: ReactElement<IconProps>
    label: string
  }
  uncheckedProps?: {
    icon: ReactElement<IconProps>
    label: string
  }
}

export default function Toggle({
  initialChecked = false,
  checkedProps,
  uncheckedProps,
  onChange = () => {},
  disabled = false,
  color = 'primary',
  'data-testid': testId,
}: Props) {
  const [enabled, setEnabled] = useState(initialChecked)

  const actualColor = enabled ? color : 'secondary'

  const colors = {
    primary: {
      enabled: `text-primary hover:not-disabled:bg-primary-50 hover:not-disabled:text-primary-700`,
      default: `text-slate-600 hover:not-disabled:bg-primary-50 hover:not-disabled:text-primary-700`,
    },
    contrast: {
      enabled: 'text-contrast hover:not-disabled:bg-contrast-50 hover:not-disabled:text-contrast-700',
      default: `text-slate-600 hover:not-disabled:bg-contrast-50 hover:not-disabled:text-contrast-700`,
    },
  }

  const hoverClasses = 'group-disabled:hover:cursor-not-allowed hover:not-disabled:cursor-pointer'
  return (
    <Field disabled={disabled} className={clsx(hoverClasses, 'max-w-fit')}>
      <Checkbox
        data-testid={testId}
        disabled={disabled}
        className={clsx(
          enabled ? colors[color].enabled : colors[color].default,
          disabled ? 'custom-disabled' : 'font-bold',
          'flex items-center gap-1 rounded-full px-3 py-1'
        )}
        checked={enabled}
        onChange={() => {
          onChange()
          setEnabled(!enabled)
        }}
      >
        {enabled
          ? React.cloneElement(checkedProps.icon, {
              'data-testid': `${testId}-icon-on`,
              color: actualColor,
              className: clsx(colors[color].enabled),
            })
          : uncheckedProps
            ? React.cloneElement(uncheckedProps.icon, {
                'data-testid': `${testId}-icon-off`,
                color: actualColor,
                className: clsx(colors[color].default),
              })
            : React.cloneElement(checkedProps.icon, {
                'data-testid': `${testId}-icon-off`,
                color: actualColor,
                className: clsx(colors[color].default),
              })}
        <Label className={clsx(hoverClasses)}>
          {enabled ? checkedProps.label : uncheckedProps?.label || checkedProps.label}
        </Label>
      </Checkbox>
    </Field>
  )
}
