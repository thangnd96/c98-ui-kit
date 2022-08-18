/* eslint-disable no-unused-vars */
import React, {
  useMemo,
  forwardRef,
  MouseEvent,
  ForwardRefRenderFunction
} from 'react'

import type { IInputProps } from './types'

import { mergeClass } from '../../utils'

const InputComponent: ForwardRefRenderFunction<HTMLInputElement, IInputProps> =
  (
    {
      leftIcon = null,
      rightIcon = null,
      name = '',
      title = '',
      className = '',
      titleClassName = '',
      labelClassName = '',
      inputSize = 'medium',
      leftIconWrapper = '',
      wrapperClassName = '',
      rightIconWrapper = '',
      ...props
    },
    ref
  ) => {
    const inputLabelSizeClass = useMemo(() => {
      switch (inputSize) {
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
    }, [inputSize])

    const inputSizeClass = useMemo(() => {
      switch (inputSize) {
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
    }, [inputSize])

    const inputTitleClass = useMemo(() => {
      switch (inputSize) {
        case 'small': {
          return 'px-2 text-sm'
        }
        case 'large': {
          return 'px-6 text-base'
        }
        default: {
          return 'px-4 text-sm'
        }
      }
    }, [inputSize])

    const iconLeftMargin = useMemo(() => {
      switch (inputSize) {
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
    }, [inputSize])

    const iconRightMargin = useMemo(() => {
      switch (inputSize) {
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
    }, [inputSize])

    return (
      <div className={mergeClass(['c98-input-wrapper', wrapperClassName])}>
        {title && (
          <div
            className={mergeClass([
              'c98-input-title mb-[6px] text-yellow',
              inputTitleClass,
              titleClassName
            ])}
          >
            {title}
          </div>
        )}

        <label
          id={name}
          className={mergeClass([
            'c98-input-label w-full flex items-center bg-gray-24 rounded-full overflow-hidden',
            inputLabelSizeClass,
            labelClassName
          ])}
        >
          {leftIcon && (
            <div
              onClick={(event: MouseEvent<HTMLElement>) =>
                event.stopPropagation()
              }
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
            name={name}
            className={mergeClass([
              'c98-input h-full flex-1 bg-transparent outline-none border-0 text-white placeholder-gray-55',
              inputSizeClass,
              className
            ])}
            ref={ref}
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
        </label>
      </div>
    )
  }

export const Input = forwardRef(InputComponent)
