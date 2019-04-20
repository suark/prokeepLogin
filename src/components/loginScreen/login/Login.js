import React from 'react'
import FormikLoginForm from '../loginForm/FormikLoginForm'

class Login extends React.Component {
  onSuccess = () => {
    window.location.href = "https://www.prokeep.com/"
  }

  onFailure = () => {
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