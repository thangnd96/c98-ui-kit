/* eslint-disable no-unused-vars */
import React, { memo, FunctionComponent } from 'react'

import type { ITab, ITabProps } from './types'

import { mergeClass } from '../../utils/func'

const Tab: FunctionComponent<ITabProps> = ({
  tabs,
  tabActive,
  onChange,
  className
}) => {
  const handleChangeTab = (tabIndex: number, tab: ITab) => () => {
    if (tabActive === tabIndex) return

    onChange(tabIndex, tab)
  }

  const renderTab = () => {
    return tabs.map((tab, index) => {
      const isActive = index === tabActive

      return (
        <div
          onClick={handleChangeTab(index, tab)}
          key={`${tab.label}-${index}`}
          className={mergeClass([
            'c98-tab',
            tab.className,
            { 'c98-tab-active text-yellow': isActive }
          ])}
        >
          {tab.label}
        </div>
      )
    })
  }

  return (
    <div
      className={mergeClass(['c98-tab-wrapper flex items-center', className])}
    >
      {renderTab()}
    </div>
  )
}

export default memo(Tab)
