import React, { useState, useRef, PropsWithChildren } from 'react'
import { useOnClickOutside } from '../../hooks'
import { SelectContext } from './SelectContext'

import { mergeClass } from '../../utils'

import type { ISelectProps, IOption } from './types'

export const Select: React.FC<PropsWithChildren<ISelectProps>> = ({
  children,
  defaultValue,
  className = '',
  indicator = '',
  labelClassName = '',
  optionsClassName = '',
  indicatorClassName = '',
  indicatorActiveClassName = '',
  placeholder = 'Choose an option',
}) => {
  const [selectedOption, setSelectedOption] = useState<IOption>(
    defaultValue || null
  )
  const [showDropdown, setShowDropdown] = useState(false)
  const showDropdownHandler = () => setShowDropdown(!showDropdown)
  const selectContainerRef = useRef(null)

  const clickOutsideHandler = () => setShowDropdown(false)

  useOnClickOutside(selectContainerRef, clickOutsideHandler)

  const updateSelectedOption = (option: IOption) => {
    setSelectedOption(option)
    setShowDropdown(false)
  }

  return (
    <SelectContext.Provider
      value={{ selectedOption, changeSelectedOption: updateSelectedOption }}
    >
      <div
        className={mergeClass([
          'text-white text-xs relative w-full',
          className
        ])}
        ref={selectContainerRef}
      >
        <div
          className={mergeClass([
            'h-10 flex items-center px-3 bg-transparent rounded-full bg-gray-55 cursor-pointer',
            labelClassName
          ])}
          onClick={showDropdownHandler}
        >
          <span className='flex-1'>
            {selectedOption ? selectedOption.label : placeholder}
          </span>

          {indicator && (
            <div
              className={mergeClass([
                'flex-none ml-3 cursor-pointer h-full rotate-0 flex items-center transition-all duration-500',
                indicatorClassName,
                {
                  'rotate-180': showDropdown,
                  [indicatorActiveClassName]: showDropdown
                }
              ])}
            >
              {indicator}
            </div>
          )}
        </div>

        <ul
          className={mergeClass([
            'bg-gray-55 rounded-2xl absolute mt-2 w-full max-h-24 opacity-0 invisible transition-all duration-500 z-50 overflow-hidden',
            optionsClassName,
            { 'opacity-100 visible': showDropdown }
          ])}
        >
          {children}
        </ul>
      </div>
    </SelectContext.Provider>
  )
}
