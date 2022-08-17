import classnames from 'classnames'
import { twMerge } from 'tailwind-merge'

type IClassName = string | { [key: string]: boolean }

const mergeClass = (className: string | IClassName[]): string => {
  return twMerge(classnames(className))
}

export { mergeClass }
