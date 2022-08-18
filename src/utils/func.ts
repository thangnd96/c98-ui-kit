/* eslint-disable no-unused-vars */
import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'

import type { IClassName } from './types'

const getLength = (arrGetter: any) => {
  if (typeof arrGetter === 'string' || Array.isArray(arrGetter))
    return arrGetter.length

  return 0
}

const mergeClass = (className: IClassName | IClassName[]): string => {
  return twMerge(classnames(className))
}

export { getLength, mergeClass }
