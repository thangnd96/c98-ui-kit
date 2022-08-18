/* eslint-disable no-unused-vars */
import type { ReactNode, InputHTMLAttributes } from 'react'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: string
  name?: string
  title?: string
  className?: string
  titleClassName?: string
  labelClassName?: string
  leftIconWrapper?: string
  wrapperClassName?: string
  rightIconWrapper?: string
  leftIcon?: ReactNode | undefined
  rightIcon?: ReactNode | undefined
  inputSize?: 'small' | 'medium' | 'large'
}
