import React from 'react'
import Transformations from './logic/js/Transformations'
// import StaffNotation from './StaffNotation'

const CalculatorDisplay = props => {
  const { set } = props
  const data = new Transformations(set)
  const { transpositions, inversions } = data

  return (
    <div>
      <h3>This is the set as a prop</h3>
      <h4>Transpositions</h4>
      {transpositions.map((t, index) => (
        <div key={`T${index}`} className="flex flex-row">
          {t.map(e => (
            <span key={`t${e}`} className="w-8">
              {e}
            </span>
          ))}
        </div>
      ))}
      <h4>Inversions</h4>
      {inversions.map((i, index) => (
        <div key={`T${index}I`} className="flex flex-row">
          {i.map(e => (
            <span key={`i${e}`} className="w-8">
              {e}
            </span>
          ))}
        </div>
      ))}
    </div>
  )
}

export default CalculatorDisplay
