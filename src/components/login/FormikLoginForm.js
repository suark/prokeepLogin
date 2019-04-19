import { withFormik } from 'formik'
import LoginForm from './LoginForm'

const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({ email: '', password: ''}),

  // Custom sync validation
  validate: values => {
    console.log(values)
    const errors = {}
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'BasicForm',
})(LoginForm)

export default FormikLoginForm