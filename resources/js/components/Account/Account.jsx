import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Account = () => {
  const token = document.querySelector('meta[name="csrf-token"]').content
  const userID = document.querySelector('meta[name=user-id').content
  const [user, setUser] = useState({})

  const getUser = async () => {
    const response = await axios.post(`/account`, { userID })
    const { data } = response
    console.log(response)
    setUser(data)
  }

  useEffect(() => {
    getUser()
  }, [])

  return user.firstName ? (
    <div>
      <div>{user.firstName}</div>
      <div>{user.lastName}</div>
      <div>{user.email}</div>
      <div>{user.username}</div>
      <div>Found sets:</div>
      {user.userData.map(s => (
        <div>{s.saved_set}</div>
      ))}
    </div>
  ) : null
}

if (document.title === 'Account') {
  ReactDOM.render(<Account />, document.getElementById('account-info'))
}
