export const loginValidate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Email address is required!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!'
  }

  if (!values.password) {
    errors.password = 'Password is required!'
  } else if (values.password.length < 8 || values.password.length > 32) {
    errors.password = 'Invalid password!'
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password!'
  }

  return errors
}

export const registerValidate = (values) => {
  const errors = {}

  // Validate username
  if (!values.username) {
    errors.username = 'Username is required!'
  } else if (values.username.length < 3 || values.username.length > 12) {
    errors.username = 'Invalid username!'
  } else if (values.username.includes(' ')) {
    errors.username = 'Invalid username!'
  }

  // Validate email
  if (!values.email) {
    errors.email = 'Email address is required!'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!'
  }

  // Validate password
  if (!values.password) {
    errors.password = 'Password is required!'
  } else if (values.password.length < 8 || values.password.length > 32) {
    errors.password = 'Invalid password!'
    // Check if password contains at least one number
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Password must contain at least one number!'
    // Check if password contains at least one uppercase letter
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter!'
    // Check if password contains at least one lowercase letter
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = 'Password must contain at least one lowercase letter!'
    // Check if password contains at least one special character
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    errors.password = 'Password must contain at least one special character!'
  } else if (values.password.includes(' ')) {
    errors.password = 'Password must not contain any spaces!'
  }

  // Validate confirm password
  if (!values.cpassword) {
    errors.cpassword = 'Confirm password is required!'
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Passwords do not match!'
  }

  return errors
}
