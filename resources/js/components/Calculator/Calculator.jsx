import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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

  console.log('this is the input state: ', set)
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
    </div>
  )
}

export default Calculator

if (document.title === 'Calculator') {
  ReactDOM.render(<Calculator />, document.getElementById('calculator'))
}
