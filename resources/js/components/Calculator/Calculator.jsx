import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// import CalculatorInput from './CalculatorInput'
import axios from 'axios'
import CalculatorDisplay from './CalculatorDisplay'
import MusicStaff from './MusicStaff'

const Calculator = () => {
  const [input, setInput] = useState({ raw: '', formatted: [] })
  const [set, setSet] = useState([])
  const [saveStatus, setSaveStatus] = useState(false)

  const regex = /^(?=[\s\S])(?:([0-9te])(?!.*\1))*$/gi

  const token = document.querySelector('meta[name="csrf-token"]').content
  const userID = document.querySelector('meta[name=user-id').content

  const changeText = e => {
    let output = []
    console.log(e.target.value)
    const setToArray = e.target.value.split('')
    setToArray.forEach(v => {
      if (v.toLowerCase() === 't') output = [...output, 10]
      else if (v.toLowerCase() === 'e') output = [...output, 11]
      else output = [...output, parseInt(v)]
    })
    if (!isNaN(output[output.length - 1])) {
      output = output.filter(n => !isNaN(n))
      input.formatted = output
      input.raw = e.target.value
      setInput(input)
    } else if (output.length === 0) {
      setInput({ raw: '', formatted: [] })
    }
  }

  const saveSet = async e => {
    // e.stopPropagation()
    console.log(e.currentTarget)
    const data = e.currentTarget.value
      .split('')
      .filter(n => n !== ',')
      .join('')
    const { raw } = input
    console.log(`the data is ${data} and the raw input is ${input.raw}`)
    try {
      if (regex.test(raw)) {
        const response = await axios.post(`/save/set/${userID}`, {
          set: raw
        })
        setSaveStatus(true)
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
    const { raw, formatted } = input
    console.log('this is the input string', raw)
    if (raw.length === 0) {
      setSet([])
      setSaveStatus(false)
    } else if (regex.test(raw)) {
      setSet(formatted)
      setSaveStatus(false)
    } else console.error('ouch')
  }

  return (
    <div>
      <div id="set-data-container">
        <div className="flex flex-row justify-start items-center">
          <form className="mr-4" onSubmit={changeSet}>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={changeText}
              type="text"
              placeholder="Type your set here"
            />
          </form>
          <div id="controls">
            <button
              id="save-button"
              value={set}
              className="bg-white hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 border border-gray-400 rounded shadow"
              onClick={saveStatus ? null : saveSet}
              type="button"
            >
              {saveStatus ? (
                <i className="fas fa-check" />
              ) : (
                <i className="far fa-save" />
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-row justify-even">
          {set.map(num => (
            <div key={num} className="w-8">
              {num}
            </div>
          ))}
        </div>
        <CalculatorDisplay set={set} />
      </div>
      <MusicStaff set={set} userID={userID} saveStatus={saveStatus} />
    </div>
  )
}

if (document.title === 'Calculator') {
  ReactDOM.render(<Calculator />, document.getElementById('calculator'))
}
