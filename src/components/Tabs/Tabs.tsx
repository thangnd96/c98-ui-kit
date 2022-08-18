/* eslint-disable no-unused-vars */
import React, { useState, FunctionComponent } from 'react'

import Tab from './Tab'

import type { ITab, ITabsProps } from './types'

import { getLength, mergeClass } from '../../utils/func'

export const Tabs: FunctionComponent<ITabsProps> = ({
  tabs = [
    {
      label: 'Tab 1',
      content: 'Content tab 1'
    },
    {
      label: 'Tab 2',
      content: 'Content tab 2'
    },
    {
      label: 'Tab 3',
      content: 'Content tab 3'
    }
  ],
  className,
  defaultTab = 0,
  onChange
}) => {
  const [tabIndex, setTabIndex] = useState<number>(() => {
    if (!defaultTab) return 0

    const index = defaultTab - 1
    const tabsLength = getLength(tabs)

    if (index <= 0 || index > tabsLength) return 0

    return index
  })

  const handleChangeTab = (tabSelected: number, tab: ITab) => {
    setTabIndex(tabSelected)

    if (onChange) {
      onChange(tabSelected, tab)
    }
  }

  return (
    <div className={mergeClass(['text-white', className])}>
      <Tab
        tabs={tabs}
        tabActive={tabIndex}
        className={className}
        onChange={handleChangeTab}
      />

      {tabs[tabIndex].content && (
        <div className={mergeClass(['p-4', className])}>{tabs[tabIndex].content}</div>
      )}
    </div>
  )
}
