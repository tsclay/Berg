import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Login from './Login'
import Register from './Register'

const Auth = () => {
  const [form, setForm] = useState(0)
  const [newUser, setNewUser] = useState({})

  const token = document.querySelector('meta[name="csrf-token"]').content

  const selectView = () => {
    if (form === 0) setForm(1)
    else setForm(0)
  }

  const makeNewUser = e => {
    e.preventDefault()
    console.log(e)
    // setNewUser({
    //   firstName: '',
    //   lastName: '',
    //   username: '',
    //   password: '',
    //   email: '',
    // })
  }

  return form === 0 ? (
    <Register selectForm={selectView} newUser={makeNewUser} token={token} />
  ) : (
    <Login selectForm={selectView} />
  )
}

export default Auth

if (document.title === 'Login | Register') {
  ReactDOM.render(<Auth />, document.getElementById('user-auth'))
}
