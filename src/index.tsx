import * as React from 'react'
import './index.css'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className='text-yellow bg-black'>Example Component: {text}</div>
}
