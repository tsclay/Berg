/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
// import axios from 'axios'

const Register = (props) => {
  const { token } = props
  
  let allErrors = []

  const attributes = ['firstName',
    'lastName',
    'email',
    'username',
    'password']

  for (let i = 0; i < attributes.length; i++) {
    if (document.getElementById('user-auth').getAttribute(attributes[i])) {
      const message  = document.getElementById('user-auth').getAttribute(attributes[i])
      // console.log(error1)
      allErrors = [...allErrors, {name: attributes[i], message}]
    }  
  }

  if (allErrors.length > 0) console.log('we got errors: ', allErrors)

  useEffect(() => {
    document.title = 'Berg | Register'
  })

  return (
    <div className="container mx-auto my-auto w-1/2  rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 flex flex-col justify-between" id="form-fields">
        <div className="font-bold text-xl mb-2 text-center">Signup</div>
        <div>

          <form className="mx-auto" method="POST" action="/register">
            <input type="hidden" name="_token" value={token} />
            <fieldset className="mb-3">
              <legend className="ml-3 mb-3">About You</legend>
              <div className="ml-3 mb-3 flex flex-row justify-between">
                
                <div>
                  {allErrors.map(error => 
                    error.name === 'firstName' ? <div style={{"color": "red"}}>{error.message}</div>
                      : null)}
                  <label className="block" htmlFor="first-name">First Name</label>
                  <input  
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First name"
                  />

                </div>
                <div>
                  {allErrors.map(error => 
                    error.name === 'lastName' ? <div style={{"color": "red"}}>{error.message}</div>
                      : null)}
                  <label className="block" htmlFor="last-name">Last Name</label>
                  <input  
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last name"
                  />
                </div>
              
              </div>
            </fieldset>
            <fieldset className="mb-3">
              <legend className="ml-3 mb-3">Account</legend>
              <div className="ml-3 mb-3">
                {allErrors.map(error => 
                  error.name === 'username' ? <div style={{"color": "red"}}>{error.message}</div>
                    : null)}
                <label className="block" htmlFor="username">Username</label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  placeholder="AwesomeDude01"
                />
              </div>
              <div className="ml-3 mb-3">
                {allErrors.map(error => 
                  error.name === 'email' ? <div style={{"color": "red"}}>{error.message}</div>
                    : null)}
                <label className="block" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="someone@example.com"
                />
              </div>
              <div className="ml-3 mb-3">
                {allErrors.map(error => 
                  error.name === 'password' ? <div style={{"color": "red"}}>{error.message}</div>
                    : null)}
                <label className="block" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Pick a good one!"
                />
              </div>
                        
            </fieldset>
            <div className="flex flex-row justify-between">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Signup</button>
              <button className="self-center inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="button">
                <Link to="/login">Have an account already?</Link>    
              </button>
            </div>
                   
          </form>
    
        </div>
      </div>
    </div>
  )
}

export default Register

// if (document.title === 'Login | Register') {
//     ReactDOM.render(<Register />, document.getElementById('user-auth'))
// }
