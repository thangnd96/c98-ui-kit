/* eslint-disable no-unused-vars */
import React, {
  memo,
  useMemo,
  FunctionComponent,
  PropsWithChildren,
  HTMLAttributes
} from 'react'

import { mergeClass } from '../../utils/func'

interface ButtonProps {
  size?: 'small' | 'medium' | 'large'
  primary?: boolean
  className?: string
}

const Button: FunctionComponent<
  PropsWithChildren<ButtonProps> & HTMLAttributes<HTMLButtonElement>
> = ({ size, primary, className = '', children, ...props }) => {
  const buttonClass = useMemo(() => {
    const style =
      'c98-button w-full px-6 rounded-full bg-grey text-fa hover:opacity-70 text-white-fa text-sm transition-all duration-300 hover:shadow-lg'

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

Button.defaultProps = {
  size: 'medium',
  primary: false,
  className: ''
}

export default memo(Button)
