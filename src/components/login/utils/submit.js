const handleSubmitLogin = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2))
    setSubmitting(false)
  }, 1000)
}

export default handleSubmitLogin