/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import Login from './Login'
import Register from './Register'

const Auth = () => {
  const token = document.querySelector('meta[name="csrf-token"]').content

  return (
    <Router>
      <Switch>
        <Route path="/auth/register">
          <Register token={token}   />
        </Route>
        <Route path="/auth/login">
          <Login token={token}   />
        </Route>
      </Switch>
    </Router>
  )
}

export default Auth

if (document.title === 'Berg | Login' || document.title === 'Berg | Register') {
  ReactDOM.render(<Auth />, document.getElementById('user-auth'))
}
