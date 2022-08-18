/* eslint-disable no-unused-vars */
import React, { memo, FunctionComponent } from 'react'

import type { ITab, ITabProps } from './types'

import { mergeClass } from '../../utils'

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
            'c98-tab py-2 px-4 bg-transparent relative cursor-pointer transition-colors duration-300 hover:text-yellow after:content-[""] after:h-[2px] after:absolute after:left-0 after:bottom-0 after:w-full after:transition-full after:duration-300 after:scale-0 after:bg-transparent',
            tab.className,
            { 'c98-tab-active text-yellow after:bg-yellow after:scale-100': isActive }
          ])}
        >
          {tab.label}
        </div>
      )
    })
  }

  return (
    <div
      className={mergeClass(['c98-tab-wrapper flex items-center border-b border-gray-55', className])}
    >
      {renderTab()}
    </div>
  )
}

export default memo(Tab)
