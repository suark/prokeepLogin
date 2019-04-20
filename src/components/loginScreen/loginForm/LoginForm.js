import React from 'react'
import PropTypes from 'prop-types'
import ProKeep from './ProKeep.svg'
import './LoginForm.css'

// The main login form containing a logo, email field, password field, and a submit button
class LoginForm extends React.Component {
  render() {
    const {
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors,
      touched,
      isSubmitting,
    } = this.props

    return (            
    <form onSubmit={handleSubmit} className='Form'>
      <div className='ProKeep-logo'>
        <img src={ProKeep} alt='ProKeep Logo' />
      </div>
      <input
        type='email'
        name='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      {errors.email && touched.email && errors.email}
      <input
        type='password'
        name='password'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      {errors.password && touched.password && errors.password}
      <button type='submit' disabled={isSubmitting}>
        Log In
      </button>
    </form>)
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  touched: PropTypes.object,
  isSubmitting: PropTypes.bool
}

export default LoginForm