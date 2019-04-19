import { withFormik } from 'formik'
import LoginForm from './LoginForm'
import handleValidation from '../utils/validation'
import handleSubmitLogin from '../utils/submit'

const FormikLoginForm = withFormik({
  mapPropsToValues: () => ({ email: '', password: ''}),
  validate: handleValidation,
  handleSubmit: handleSubmitLogin,
  displayName: 'Prokeep Project Login',
})(LoginForm)

export default FormikLoginForm