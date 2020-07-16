import React from 'react'
import ReactDOM from 'react-dom'
import Vex from 'vexflow'

const StaffNotation = () => {
  return (
    <div>
      <h3>Staff Notation component</h3>
      <div id="boo" />
    </div>
  )
}

export default StaffNotation

if (document.title === 'Calculator') {
  ReactDOM.render(<StaffNotation />, document.getElementById('staff-notation'))
}
