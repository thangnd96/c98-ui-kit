import React, { FunctionComponent, useEffect, useRef } from 'react'
import { IContentEditableProps } from './types'

import { mergeClass } from '../../utils'

function replaceCaret(el: HTMLElement) {
  // Place the caret at the end of the element
  const target = document.createTextNode('')
  el.appendChild(target)
  // do not move caret if element was not focused
  const isTargetFocused = document.activeElement === el
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var sel = window.getSelection()
    if (sel !== null) {
      var range = document.createRange()
      range.setStart(target, target.nodeValue.length)
      range.collapse(true)
      sel.removeAllRanges()
      sel.addRange(range)
    }
    if (el instanceof HTMLElement) el.focus()
  }
}

export const ContentEditable: FunctionComponent<IContentEditableProps> = ({
  html,
  style,
  tagName,
  disabled,
  className,
  innerRef,
  ...props
}) => {
  const ref =
    typeof innerRef === 'function' ? { current: null } : useRef<HTMLElement>()

  useEffect(() => {
    const element = getElement()
    if (!element) return

    // Perhaps React (whose VDOM gets outdated because we often prevent
    // rerendering) did not update the DOM. So we update it manually now.
    if (html !== element.innerHTML) {
      element.innerHTML = html
    }

    replaceCaret(element)
  }, [])

  const getElement = () =>
    (innerRef && typeof innerRef !== 'function' ? innerRef : ref).current

  const emitChange = (originalEvt: React.SyntheticEvent<any>) => {
    const element = getElement()
    if (!element) return

    const html = element.innerHTML
    if (props.onChange) {
      // Clone event with Object.assign to avoid
      // "Cannot assign to read only property 'target' of object"
      const evt = Object.assign({}, originalEvt, {
        target: {
          value: html
        }
      })
      props.onChange(evt)
    }
  }

  return (
    <div
      {...props}
      ref={() => {
        typeof innerRef === 'function'
          ? (current: HTMLElement) => {
              innerRef(current)
              ref.current = current
            }
          : innerRef || ref
      }}
      className={mergeClass([
        'min-h-[40px] text-white text-sm bg-gray-24 rounded-3xl px-4 py-2 outline-none border-0 placeholder-gray-55',
        className
      ])}
      onInput={emitChange}
      contentEditable={true}
      onBlur={props.onBlur || emitChange}
      onKeyUp={props.onKeyUp || emitChange}
      onKeyDown={props.onKeyDown || emitChange}
      dangerouslySetInnerHTML={{ __html: html }}
    >
      {props.children}
    </div>
  )
}
