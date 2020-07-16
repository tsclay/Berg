import React from 'react'
import Transformations from './logic/js/Transformations'

const CalculatorDisplay = props => {
  const { set } = props
  const data = new Transformations(set)
  const { transpositions, inversions } = data

  return (
    <div>
      <h3>This is the set as a prop</h3>
      <h4>getTranspositions</h4>
      {transpositions.map(t => (
        <div className="flex flex-row">
          {t.map(e => (
            <span className="w-8">{e}</span>
          ))}
        </div>
      ))}
      <h4>Inversions</h4>
      {inversions.map(i => (
        <div className="flex flex-row">
          {i.map(e => (
            <span className="w-8">{e}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CalculatorDisplay
