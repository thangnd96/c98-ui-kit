/* eslint-disable no-unused-vars */
import type { ReactNode } from 'react'

export interface ITab {
  label: string | ReactNode
  className?: string
  content?: ReactNode | undefined
  [key: string]: any
}

export interface ITabProps {
  tabs: ITab[]
  tabActive: number
  className?: string
  onChange: (tabSelected: number, tab: ITab) => void
}

export interface ITabsProps {
  tabs: ITab[]
  defaultTab?: number
  className?: string
  onChange?: (tabSelected: number, tab: ITab) => void
}
