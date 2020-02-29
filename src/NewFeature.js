import React, { useState } from 'react'
import MyButton from './components/MyButton'
import MemoAnimation from './components/Animation'
import Popup from './components/Popup'

import 'bootstrap/dist/css/bootstrap.min.css';

function NewFeature() {
  const [isOpen, setIsOpen] = useState(false)
  const [gotit, setGotit] = useState(false)

  return (
    <div className="app">
      <MyButton checkNewFeature={() => setIsOpen(true)} />
      {!gotit && <MemoAnimation />}
      <div>
        <Popup isOpen={isOpen} setIsOpen={setIsOpen} gotit={gotit} setGotit={setGotit} />
      </div>
    </div>
  )
}

export default NewFeature