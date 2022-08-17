import React from 'react'

import { Button, Input } from 'c98-ui-kit'
import 'c98-ui-kit/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000000',
        padding: '40px'
      }}
    >
      <Button>C98 UI KIT ha 😄</Button>

      <div style={{ marginTop: '10px' }}>
        <Input
          inputProps={{
            placeholder: 'test placeholder'
          }}
        />
      </div>
    </div>
  )
}

export default App
