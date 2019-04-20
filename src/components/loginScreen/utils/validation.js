/**
 * Validates an email address
 * @param {string} email Email address 
 */
const validateEmail = (email) => {
  if (email == null || email === '') {
    return {
      valid: false,
      error: 'Email is Required',
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

/**
 * Validates a password
 * @param {string} password Password
 */
const validatePassword = (password) => {
  if (password == null || (typeof password === 'string' && password.length < 1)) {
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

/**
 * 
 * @param {object} values An object containing the form's values
 */
const handleValidation = ({ email, password }) => {
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