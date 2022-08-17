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
        return 'h-6 px-2 py-1 text-xs'
      }
      case 'large': {
        return 'h-12 px-6 py-3 text-sm'
      }
      default: {
        return 'h-10 px-4 py-2 text-xs'
      }
    }
  }, [size])

  const inputSizeClass = useMemo(() => {
    switch (size) {
      case 'small': {
        return 'text-xs'
      }
      case 'large': {
        return 'text-sm'
      }
      default: {
        return 'text-xs'
      }
    }
  }, [size])

  const iconLeftMargin = useMemo(() => {
    switch (size) {
      case 'small': {
        return 'mr-2'
      }
      case 'large': {
        return 'mr-6'
      }
      default: {
        return 'mr-4'
      }
    }
  }, [size])

  const iconRightMargin = useMemo(() => {
    switch (size) {
      case 'small': {
        return 'ml-2'
      }
      case 'large': {
        return 'ml-6'
      }
      default: {
        return 'ml-4'
      }
    }
  }, [size])

  return (
    <div
      className={mergeClass([
        'c98-input-wrapper w-full flex items-center bg-grey rounded-full overflow-hidden',
        inputWrapperSizeClass,
        className
      ])}
    >
      {leftIcon && (
        <div
          className={mergeClass([
            'c98-left-icon-wrapper h-full flex-none flex items-center justify-center',
            iconLeftMargin,
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
            'c98-left-icon-wrapper h-full flex-none flex items-center justify-center',
            iconRightMargin,
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
