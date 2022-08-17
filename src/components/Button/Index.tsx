/* eslint-disable no-unused-vars */
import React, {
  memo,
  FunctionComponent,
  PropsWithChildren,
  HTMLAttributes
} from 'react'

import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  className?: string
}

const Button: FunctionComponent<
  PropsWithChildren<ButtonProps> & HTMLAttributes<HTMLButtonElement>
> = ({ className, children, ...props }) => {
  return (
    <button {...props} className={twMerge(classnames('bg-white', className))}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: ''
}

export default memo(Button)
