import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import CalculatorInput from './CalculatorInput'

const Calculator = () => {
  return (
    <div>
      <CalculatorInput />
    </div>
  )
}

if (document.title === 'Calculator') {
  ReactDOM.render(<Calculator />, document.getElementById('calculator'))
}
