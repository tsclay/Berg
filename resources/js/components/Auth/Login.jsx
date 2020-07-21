/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import axios from 'axios'

const Login = (props) => {
  const { token } = props

  let loginError = ''

  const inputClass = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

  const inputHasError = "shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
  
  if (document.getElementById('user-auth').getAttribute('login')) {
    loginError = document.getElementById('user-auth').getAttribute('login')
  }

  useEffect(() => {
    document.title = 'Berg | Login'
  })

  return (
    <div className="container mx-auto mt-1/5 w-1/2 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 flex flex-col justify-between" id="form-fields">
        <div className="font-bold text-xl mb-2 text-center">Login</div>
        <div>
          {loginError ? (
            <p className="text-red-500 text-xs italic">
              {loginError}
            </p>
          ) : null}
          <form className="mx-auto" method="POST" action="/login">
            <input type="hidden" name="_token" value={token} />
            <fieldset className="mb-3">
              <legend className="ml-3 mb-3">Account</legend>
              <div className="ml-3 mb-3">
                <label className="block" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"    
                  placeholder="someone@example.com"
                  className={loginError ? inputHasError
                    : inputClass}
                />
              </div>
              <div className="ml-3 mb-3">
                <label className="block" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Pick a good one!"
                  className={loginError ? inputHasError
                    : inputClass}
                />
              </div>
            </fieldset>
            <div className="flex flex-row justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enter!</button>
              <button className="self-center inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
                <Link to="/register">Need an account?</Link>
              </button>
            </div>    
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login

// if (document.title === 'Login | Register') {
//     ReactDOM.render(<Login />, document.getElementById('user-auth'))
// }
