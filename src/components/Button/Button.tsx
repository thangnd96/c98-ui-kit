import React, {
  useMemo,
  FunctionComponent,
  PropsWithChildren,
  HTMLAttributes
} from 'react'

import type { IButtonProps } from './types'

import { mergeClass } from '../../utils'

export const Button: FunctionComponent<
  PropsWithChildren<IButtonProps> & HTMLAttributes<HTMLButtonElement>
> = ({
  size = 'medium',
  primary = false,
  className = 'c98-button',
  children = 'Button',
  ...props
}) => {
  const buttonClass = useMemo(() => {
    const style =
      'c98-button w-full px-6 rounded-full bg-white/20 text-fa hover:opacity-70 text-white-fa text-sm transition-all duration-300 hover:shadow-lg'

    if (primary) {
      return style + ' bg-yellow'
    }

    return style
  }, [primary])

  const buttonSizeClass = useMemo(() => {
    switch (size) {
      case 'small': {
        return 'h-8'
      }
      case 'large': {
        return 'h-12'
      }
      default: {
        return 'h-10'
      }
    }
  }, [size])

  return (
    <button
      {...props}
      className={mergeClass([buttonClass, buttonSizeClass, className])}
    >
      {children}
    </button>
  )
}
