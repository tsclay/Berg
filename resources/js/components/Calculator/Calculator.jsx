import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import CalculatorInput from './CalculatorInput'
import MusicStaff from './MusicStaff'

const Calculator = () => {
  const [set, setSet] = useState([])
  const [firstLoad, setFirstLoad] = useState(true)

  const changeText = e => {
    setFirstLoad(false)
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
    <>
      <CalculatorInput set={set} changeText={changeText} />
      <MusicStaff set={set} firstLoad={firstLoad} />
    </>
  )
}

if (document.title === 'Calculator') {
  ReactDOM.render(<Calculator />, document.getElementById('calculator'))
}
