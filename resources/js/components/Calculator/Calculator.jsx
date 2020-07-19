import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import CalculatorInput from './CalculatorInput'
import axios from 'axios'
import CalculatorDisplay from './CalculatorDisplay'
import MusicStaff from './MusicStaff'

const Calculator = () => {
  const [input, setInput] = useState([])
  const [set, setSet] = useState([])

  const regex = /^(?=[\s\S])(?:([0-9te])(?!.*\1))*$/gi

  const token = document.querySelector('meta[name="csrf-token"]').content

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
      setInput(output)
    } else if (output.length === 0) {
      setInput([])
    }
  }

  const saveSet = async e => {
    // const data = e.target.value
    //   .split('')
    //   .filter(n => n !== ',')
    //   .join('')

    try {
      if (regex.test(e.target.value)) {
        const response = await axios.post('/save/set/4', {
          set: e.target.value
        })
        console.log(response)
      } else {
        throw new Error('Make sure your set does not contain duplicates.')
      }
    } catch (error) {
      console.error(error)
    }
  }

  const changeSet = e => {
    e.preventDefault()
    if (regex.test(input)) setSet(input)
    else console.error('ouch')
  }

  return (
    <div className="grid grid-rows-1 grid-cols-2">
      <div>
        <form onSubmit={changeSet}>
          <input
            onChange={changeText}
            type="text"
            placeholder="type your set here"
          />
        </form>
        <button value={set} onClick={saveSet} type="button">
          Save this Set
        </button>
        <div className="flex flex-row justify-even">
          {set.map(num => (
            <div key={num} className="w-8">
              {num}
            </div>
          ))}
        </div>
        <CalculatorDisplay set={set} />
      </div>
      <MusicStaff set={set} />
    </div>
  )
}

if (document.title === 'Calculator') {
  ReactDOM.render(<Calculator />, document.getElementById('calculator'))
}
