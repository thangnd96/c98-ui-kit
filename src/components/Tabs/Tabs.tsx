/* eslint-disable no-unused-vars */
import React, { useState, FunctionComponent } from 'react'

import Tab from './Tab'

import type { ITab, ITabsProps } from './types'

import { getLength, mergeClass } from '../../utils/func'

export const Tabs: FunctionComponent<ITabsProps> = ({
  tabs = [],
  className,
  defaultTab = 0,
  onChange = () => null
}) => {
  const [tabIndex, setTabIndex] = useState<number>(() => {
    console.log('first')
    if (!defaultTab) return 0

    const index = defaultTab - 1
    const tabsLength = getLength(tabs)

    if (index <= 0 || index > tabsLength) return 0

    return index
  })

  console.log('🚀 ~ file: Tabs.tsx ~ line 26 ~ tabIndex', tabIndex)

  const handleChangeTab = (tabSelected: number, tab: ITab) => {
    console.log('🚀 ~ file: Tabs.tsx ~ line 28 ~ tabSelected', tabSelected)
    setTabIndex(tabSelected)

    onChange(tabSelected, tab)
  }

  return (
    <div className={mergeClass([className])}>
      <Tab
        tabs={tabs}
        tabActive={tabIndex}
        className={className}
        onChange={handleChangeTab}
      />

      {tabs[tabIndex].content && (
        <div className={mergeClass([className])}>{tabs[tabIndex].content}</div>
      )}
    </div>
  )
}
