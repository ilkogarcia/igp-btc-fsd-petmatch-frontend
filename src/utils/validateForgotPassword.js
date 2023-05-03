export default function validateForgotPassword(values) {
  const errors = {}

  // can´t be empty
  if (!values.email) {
    errors.email = 'Email address is required!'
    // must be a valid email address
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!'
  }

  return errors
}
