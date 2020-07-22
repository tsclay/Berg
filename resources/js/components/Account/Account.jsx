/* eslint-disable indent */

import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Account = () => {
  const token = document.querySelector('meta[name="csrf-token"]').content
  const userID = document.querySelector('meta[name=user-id').content
  const [user, setUser] = useState({})
  const [changedUser, setChangedUser] = useState({ userID })

  const inputClass =
    'shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'

  const inputHasError =
    'shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'

  const getUser = async () => {
    const response = await axios.post(`/account`, { userID })
    const { data } = response
    setUser(data)
    setChangedUser({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      userID
    })
  }

  const prepareUpdate = e => {
    switch (e.target.id) {
      case 'firstName':
        changedUser.firstName = e.target.value
        break
      case 'lastName':
        changedUser.lastName = e.target.value
        break
      case 'email':
        changedUser.email = e.target.value
        break
      default:
    }
    setChangedUser(changedUser)
  }

  const updateUser = async e => {
    e.preventDefault()
    const response = await axios.put('/account/update', changedUser)
    const { email, firstName, lastName, username } = response.data
    setUser({ email, firstName, lastName, username, userData: user.userData })
    document.getElementById('greeter').innerHTML = `Welcome, ${firstName}`
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      <div className="container mx-auto mt-1/5 w-1/2 rounded overflow-hidden shadow-lg">
        {user.firstName ? (
          <div className="px-6 py-4" id="form-fields">
            <div className="font-bold text-2xl mb-4">Your Info</div>
            <form className="w-full" id="update-info" onSubmit={updateUser}>
              <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <div>
                  <label className="font-bold text-lg" htmlFor="firstName">
                    First Name
                  </label>
                  <p>{user.firstName}</p>
                  <input
                    className={inputClass}
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    onChange={prepareUpdate}
                  />
                </div>
                <div>
                  {' '}
                  <label className="font-bold text-lg" htmlFor="lastName">
                    Last Name
                  </label>
                  <p>{user.lastName}</p>
                  <input
                    className={inputClass}
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    onChange={prepareUpdate}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 grid-rows-1 gap-4">
                <div>
                  <label className="font-bold text-lg" htmlFor="firstName">
                    Email
                  </label>
                  <p>{user.email}</p>
                  <input
                    className={inputClass}
                    id="email"
                    type="text"
                    placeholder="Email"
                    onChange={prepareUpdate}
                  />
                </div>
                <div>
                  {' '}
                  <p className="font-bold text-lg">
                    Username{' '}
                    <span className="text-gray-500 text-xs italic">
                      unchangeable... for now!
                    </span>
                  </p>
                  <p>{user.username}</p>
                </div>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-48 block mr-0"
                type="submit"
              >
                Make changes
              </button>
            </form>
          </div>
        ) : (
          <div className="px-6 py-4 mx-auto w-1/2">
            <img
              className="block mx-auto"
              src="/assets/loading.gif"
              alt="Fetching data..."
            />
          </div>
        )}
      </div>
      {/* {user.userData ? (
        <div>
          Found sets:
          {user.userData.map(s => (
            <div>{s.saved_set}</div>
          ))}
        </div>
      ) : null} */}
    </div>
  )
}

if (document.title === 'Account') {
  ReactDOM.render(<Account />, document.getElementById('account-info'))
}
