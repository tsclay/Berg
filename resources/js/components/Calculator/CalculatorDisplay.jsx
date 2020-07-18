import React from 'react'
import Transformations from './logic/js/Transformations'
import NormalForm from './logic/js/NormalForm'
// import StaffNotation from './StaffNotation'

const CalculatorDisplay = props => {
  const { set } = props
  const data = new Transformations(set)
  const formOfSet = new NormalForm(set)
  const { transpositions, inversions } = data
  const { primeForm, normalForm } = formOfSet

  return set.length > 0 ? (
    <div id="transformations">
      <div id="prime-form" className="flex flex-col">
        <h4 className="w-full">Prime Form</h4>
        <div className="flex flex-row">
          {primeForm.map(n => (
            <span className="w-8">{n}</span>
          ))}
        </div>
      </div>

      <div id="normal-form" className="flex flex-col">
        <h4 className="w-full">Normal Form</h4>
        <div className="flex flex-row">
          {normalForm.map(n => (
            <span className="w-8">{n}</span>
          ))}
        </div>
      </div>

      <div id="transpositions">
        <h4>Transpositions</h4>
        {transpositions.map((t, index) => (
          <div key={`T${index}`} className="flex flex-row">
            <h4 className="w-12">
              T<sub>{index}</sub>
            </h4>
            {t.map(e => (
              <span key={`t${e}`} className="w-8">
                {e}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div id="inversions">
        <h4>Inversions</h4>
        {inversions.map((i, index) => (
          <div key={`T${index}I`} className="flex flex-row">
            <h4 className="w-12">
              T<sub>{index}</sub>I
            </h4>
            {i.map(e => (
              <span key={`i${e}`} className="w-8">
                {e}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>
      <h4>
        Begin typing digits 0-9, t (10), and e (11) to see the details on your
        set!
      </h4>
    </div>
  )
}

export default CalculatorDisplay
