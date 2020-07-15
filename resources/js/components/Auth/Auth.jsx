import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import Register from './Register'

const Auth = () => {
  const [form, setForm] = useState(0)

  const selectView = () => {
    if (form === 0) setForm(1)
    else setForm(0)
  }

  return form === 0 ? (
    <Register selectForm={selectView} />
  ) : (
    <Login selectForm={selectView} />
  )
}

export default Auth

if (document.title === 'Login | Register') {
  ReactDOM.render(<Auth />, document.getElementById('user-auth'))
}
