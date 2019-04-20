import handleSubmitLogin from './submit'

// Mimics a value formik would pass to this function
const setSubmitting = (flag) => flag
const fakeFormikBag = { setSubmitting }

// Test each combination of valid email and password to make sure our form submission function is safe.
it('succeeds with a valid email and password', async () => {
  const emailAndPassword = {
    email: 'hello@emailaddress.com',
    password: '42',
  }
  const data = await handleSubmitLogin(emailAndPassword, fakeFormikBag)
  expect(data).toBe(true)
})

it('fails with no email and no password', async () => {
  const emailAndPassword = {
    email: '',
    password: '',
  }
  const data = await handleSubmitLogin(emailAndPassword, fakeFormikBag)
  expect(data).toBe(false)
})

it('fails with a valid email and no password', async () => {
  const emailAndPassword = {
    email: 'hello@emailaddress.com',
    password: '',
  }
  const data = await handleSubmitLogin(emailAndPassword, fakeFormikBag)
  expect(data).toBe(false)
})

it('fails with no email and a valid password', async () => {
  const emailAndPassword = {
    email: '',
    password: '42',
  }
  const data = await handleSubmitLogin(emailAndPassword, fakeFormikBag)
  expect(data).toBe(false)
})