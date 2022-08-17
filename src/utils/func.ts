import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'

const mergeClass = (className: string | string[]): string => {
  return twMerge(classnames(className))
}

export { mergeClass }
