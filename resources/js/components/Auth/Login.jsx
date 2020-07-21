/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import axios from 'axios'

const Login = (props) => {
  const { token } = props

  let loginError = ''
  
  if (document.getElementById('user-auth').getAttribute('login')) {
    loginError = document.getElementById('user-auth').getAttribute('login')
  }

  useEffect(() => {
    document.title = 'Berg | Login'
  })

  return (
    <div className="container mx-auto my-auto w-1/2 rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 flex flex-col justify-between" id="form-fields">
        <div className="font-bold text-xl mb-2 text-center">Login</div>
        <div>
          {loginError ? (
            <div>
              <h3 style={{"color": "red"}}>{loginError}</h3>
            </div>
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
                  style={loginError ? {"border": "2px solid red"} : null}
                />
              </div>
              <div className="ml-3 mb-3">
                <label className="block" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Pick a good one!"
                  style={loginError ? {"border": "2px solid red"} : null}
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
