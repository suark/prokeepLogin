import React from 'react'
import FormikLoginForm from '../loginForm/FormikLoginForm'

class Login extends React.Component {
  render() {
    return (
      <div>
        <h1>ProKeep</h1>
        <FormikLoginForm />
      </div>
    )
  }
}

export default Login