import React from 'react'
import FormikLoginForm from '../loginForm/FormikLoginForm'

// The main login screen component that contains the login form
class Login extends React.Component {
  onSuccess = () => {
    // If the user logs in, we will navigate to the prokeep website
    window.location.href = "https://www.prokeep.com/"
  }

  onFailure = () => {
    // This will basically never run because the form validation prevents a bad submit
    alert('Login was unsuccessful. Please check inputs and try agian.')
  }

  render() {
    return (
      <div>
        <FormikLoginForm
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
        />
      </div>
    )
  }
}

export default Login