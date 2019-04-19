import axios from 'axios'

const LOGIN_URL = 'https://reqres.in/api/login'

const handleSubmitLogin = async ({ email, password }, { setSubmitting }) => {
  try {
    const response = await axios.post(
      LOGIN_URL,
      {
        email,
        password,
      }
    )
    if (response.status && response.status === 200 ) {
      alert('Logged in successfully!')
    } else {
      alert('Login Failed')
    }
  } catch (error) {
    alert(error)
  }
  setSubmitting(false)
}

export default handleSubmitLogin