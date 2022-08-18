import React from 'react'
import { useSelectContext } from './SelectContext'

import type { IOptionProps } from './types'

import { mergeClass } from '../../utils'

export const Option: React.FC<IOptionProps> = ({
  data,
  className = '',
  activeClassName = ''
}) => {
  const { selectedOption, changeSelectedOption } = useSelectContext()

  if (!data) return null

  return (
    <li
      className={mergeClass([
        'px-3 py-2 hover:bg-gray-24 transition-all duration-300 cursor-pointer',
        className,
        {
          'bg-gray-24': selectedOption?.value === data.value,
          [activeClassName]: selectedOption?.value === data.value
        }
      ])}
      onClick={() => changeSelectedOption(data)}
    >
      {data.label}
    </li>
  )
}
