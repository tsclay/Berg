import React, { useState } from 'react'
import CalculatorDisplay from './CalculatorDisplay'

const CalculatorInput = props => {
  const { set, changeText } = props

  return (
    <div>
      <form action="">
        <input
          onChange={changeText}
          type="text"
          placeholder="type your set here"
        />
      </form>
      <div className="flex flex-row justify-even">
        {set.map(num => (
          <div key={num} className="w-8">
            {num}
          </div>
        ))}
      </div>
      <CalculatorDisplay set={set} />
    </div>
  )
}

export default CalculatorInput
