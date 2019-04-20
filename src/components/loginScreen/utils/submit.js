import axios from 'axios'

const LOGIN_URL = 'https://reqres.in/api/login'

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
      if (props && props.onSuccess) {
        props.onSuccess()
      }
      return true
    }
  } catch (error) {
    if (props && props.onFailure) {
      props.onFailure()
    }
    return false
  } finally {
    setSubmitting(false)
  }
}

export default handleSubmitLogin