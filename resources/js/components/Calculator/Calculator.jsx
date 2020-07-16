import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import CalculatorInput from './CalculatorInput'
import MusicStaff from './MusicStaff'

const Calculator = () => {
  return (
    <div className="flex flex-row justify-between">
      <CalculatorInput />
      <MusicStaff />
    </div>
  )
}

if (document.title === 'Calculator') {
  ReactDOM.render(<Calculator />, document.getElementById('calculator'))
}
