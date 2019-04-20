import { withFormik } from 'formik'
import LoginForm from './LoginForm'
import handleValidation from '../utils/validation'
import handleSubmitLogin from '../utils/submit'

// This HoC will enhance our form with the features of a formik form.
const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({ email: '', password: ''}),
  validate: handleValidation,
  handleSubmit: handleSubmitLogin,
  displayName: 'Prokeep Project Login',
})(LoginForm)

export default FormikLoginForm