/* eslint-disable no-unused-vars */
import React, { FunctionComponent } from 'react'

import './style.css'

interface IconProps {
  className?: string
}

const Icon: FunctionComponent<IconProps> = () => {
  return <i className='c98-app_terra2' />
}

Icon.defaultProps = {
  className: ''
}

export default Icon
