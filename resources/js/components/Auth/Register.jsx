/* eslint-disable prettier/prettier */
import React from 'react'

const Register = (props) => {
  const {selectForm,token} = props

  const handleForm = () => {
    selectForm()
  }

  return (
    <div className="min-h-1/2 container mx-auto my-auto w-1/2  rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Signup</div>
        <form className="mx-auto" method="POST" action="/user/create">
          <input type="hidden" name="_token" value={token} />
          <fieldset className="mb-3">
            <legend className="ml-3 mb-3">About You</legend>
            <div className="ml-3 mb-3">
          
              <label className="block" htmlFor="first-name">First Name</label>
              <input  
                type="text"
                id="first-name"
                name="firstName"
                placeholder="First name"
              />
              <label className="block" htmlFor="last-name">Last Name</label>
              <input  
                type="text"
                id="last-name"
                name="lastName"
                placeholder="Last name"
              />
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
            <button className="self-center inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" type="submit" onClick={handleForm}>
                      Have an account already?
            </button>
          </div>
                   
        </form>
      </div>
    </div>
  )
}

export default Register

// if (document.title === 'Login | Register') {
//     ReactDOM.render(<Register />, document.getElementById('user-auth'))
// }
