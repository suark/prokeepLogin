import axios from 'axios'

const LOGIN_URL = 'https://reqres.in/api/login'

/**
 * Attempts to log the user into the site
 * @param {object} values Must contain an email and password  
 * @param {object} formikbag Passed by formik, contains utils and props of the original component. 
 */
const handleSubmitLogin = async ({ email, password }, { props, setSubmitting }, ) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      {
        email,
        password,
      }
    )
    if (response.status != null && response.status === 200 ) {
      if (props != null && props.onSuccess) {
        props.onSuccess()
      }
      return true
    }
  } catch (error) {
    if (props != null && props.onFailure) {
      props.onFailure()
    }
    return false
  } finally {
    setSubmitting(false)
  }
}

export default handleSubmitLogin