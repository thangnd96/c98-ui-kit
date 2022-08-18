export interface ISelectContext {
  selectedOption: IOption
  changeSelectedOption: (option: IOption) => void
}

export interface ISelectProps {
  defaultValue?: IOption
  placeholder?: string
}

export type IOption = {
  label: string
  value: string
} | null

export interface IOptionProps {
  data: IOption
}
