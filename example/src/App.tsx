import React from 'react'

import { Button, Input } from 'c98-ui-kit'
import 'c98-ui-kit/dist/index.css'

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#000000'}}>
      <Button className='text-white-fa text-sm transition-all duration-300'>
        C98 UI KIT ha 😄
      </Button>

      <Input className='mt-10' />
    </div>
  )
}

export default App
