import type { ReactNode } from 'react'
export interface ISelectContext {
  selectedOption: IOption
  changeSelectedOption: (option: IOption) => void
}

export interface ISelectProps {
  className?: string,
  placeholder?: string
  indicator?: ReactNode
  indicatorClassName?: string
  indicatorActiveClassName?: string
  defaultValue?: IOption
  labelClassName?: string,
  optionsClassName?: string
}

export type IOption = {
  label: string
  value: string
} | null

export interface IOptionProps {
  className?: string
  activeClassName?: string
  data: IOption
}
