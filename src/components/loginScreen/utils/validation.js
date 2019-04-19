const validateEmail = (email) => {
  if (email == null || email === '') {
    return {
      valid: false,
      error: 'Required',
    }
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
  ) {
    return {
      valid: false,
      error: 'Invalid email address',
    }
  } else {
    return {
      valid: true,
    }
  }
}

const validatePassword = (password) => {
  if (password == null || password === '') {
    return {
      valid: false,
      error: 'Required',
    }
  } else if (typeof password === 'string' && password.length < 1) {
    return {
      valid: false,
      error: 'Password too short',
    }
  } else {
    return {
      valid: true,
    }
  }
}

const handleValidation = ({ email, password }) => {
  console.log('validating')
  console.log('email:', email)
  console.log('password:', password)
  const errors = {}
  const emailValidationResult = validateEmail(email)
  if (!emailValidationResult.valid) {
    errors.email = emailValidationResult.error
  }
  const passwordValidationResult = validatePassword(password)
  if (!passwordValidationResult.valid) {
    errors.password = passwordValidationResult.error
  }
  return errors
}

export default handleValidation