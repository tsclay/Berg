/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Register = (props) => {
  const { token } = props

  useEffect(() => {
    document.title = 'Berg | Register'
  })

  return (
    <div className="container mx-auto my-auto w-1/2  rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4 flex flex-col justify-between" id="form-fields">
        <div className="font-bold text-xl mb-2 text-center">Signup</div>
        <div>
          <form className="mx-auto" method="POST" action="/user/create">
            <input type="hidden" name="_token" value={token} />
            <fieldset className="mb-3">
              <legend className="ml-3 mb-3">About You</legend>
              <div className="ml-3 mb-3 flex flex-row justify-between">
                <div>
                  <label className="block" htmlFor="first-name">First Name</label>
                  <input  
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First name"
                  />

                </div>
                <div>
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
                <label className="block" htmlFor="username">Username</label>
                <input
                  type="username"
                  id="username"
                  name="username"
                  placeholder="AwesomeDude01"
                />
              </div>
              <div className="ml-3 mb-3">
                <label className="block" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="someone@example.com"
                />
              </div>
              <div className="ml-3 mb-3">
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
                <Link to="/auth/login">Have an account already?</Link>    
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
