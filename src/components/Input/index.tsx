/* eslint-disable no-unused-vars */
import React, {
  useMemo,
  createRef,
  ReactNode,
  RefObject,
  forwardRef,
  useImperativeHandle,
  HTMLAttributes,
  ForwardRefRenderFunction
} from 'react'

import { mergeClass } from '../../utils/func'

interface InputProps {
  className?: string
  leftIconWrapper?: string
  rightIconWrapper?: string
  size?: 'small' | 'medium' | 'large'
  leftIcon?: ReactNode | undefined
  rightIcon?: ReactNode | undefined
  inputProps?: HTMLAttributes<HTMLInputElement>
}

interface InputRef {
  clear(): void
}

const Input: ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    size,
    leftIcon,
    rightIcon,
    inputProps,
    className = '',
    leftIconWrapper = '',
    rightIconWrapper = ''
  },
  ref
) => {
  const inputRef: RefObject<HTMLInputElement> = createRef()

  const { className: inputClassName = '', ...props } = inputProps || {}
  useImperativeHandle(ref, (): InputRef => {
    const target = inputRef.current as HTMLInputElement

    return {
      clear: () => {
        target.value = ''
      }
    }
  })

  const inputWrapperSizeClass = useMemo(() => {
    switch (size) {
      case 'small': {
        return 'h-8'
      }
      case 'large': {
        return 'h-14'
      }
      default: {
        return 'h-11'
      }
    }
  }, [size])

  const inputSizeClass = useMemo(() => {
    switch (size) {
      case 'small': {
        return 'text-xs'
      }
      case 'large': {
        return 'text-base'
      }
      default: {
        return 'text-sm'
      }
    }
  }, [size])

  return (
    <div
      className={mergeClass([
        'c98-input-wrapper w-full flex items-center bg-grey rounded-full overflow-hidden px-5 py-3',
        inputWrapperSizeClass,
        className
      ])}
    >
      {leftIcon && (
        <div
          className={mergeClass([
            'c98-left-icon-wrapper flex-none flex items-center justify-center mr-5',
            leftIconWrapper
          ])}
        >
          {leftIcon}
        </div>
      )}

      <input
        {...props}
        className={mergeClass([
          'c98-input h-full flex-1 bg-transparent outline-none border-0 text-white-fa',
          inputSizeClass,
          inputClassName
        ])}
        ref={inputRef}
      />

      {rightIcon && (
        <div
          className={mergeClass([
            'c98-left-icon-wrapper flex-none flex items-center justify-center ml-5',
            rightIconWrapper
          ])}
        >
          {rightIcon}
        </div>
      )}
    </div>
  )
}

export default forwardRef(Input)
