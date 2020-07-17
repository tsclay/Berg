import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import CalculatorInput from './CalculatorInput'
import MusicStaff from './MusicStaff'

const Calculator = () => {
  const [set, setSet] = useState([])

  const changeText = e => {
    let output = []
    const setToArray = e.target.value.split('')
    setToArray.forEach(v => {
      if (v.toLowerCase() === 't') output = [...output, 10]
      else if (v.toLowerCase() === 'e') output = [...output, 11]
      else output = [...output, parseInt(v)]
    })
    if (!isNaN(output[output.length - 1])) {
      output = output.filter(n => !isNaN(n))
      setSet(output)
    } else if (output.length === 0) {
      setSet([])
    }
  }

  return (
    <div className="flex flex-row justify-between">
      <CalculatorInput set={set} changeText={changeText} />
      <MusicStaff set={set} />
    </div>
  )
}

if (document.title === 'Calculator') {
  ReactDOM.render(<Calculator />, document.getElementById('calculator'))
}
