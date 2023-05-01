/* eslint-disable import/no-anonymous-default-export */
/**
 * @fileoverview This file contains the validation functions for the Register forms.
 */

export default function validateSignUp(values) {
  const errors = {}

  // can´t be empty
  if (!values.email) {
    errors.email = 'Email address is required!'
    // must be a valid email address
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address!'
  }

  // can´t be empty
  if (!values.password) {
    errors.password = 'Password is required!'
    // must be between 8 and 32 characters
  } else if (values.password.length < 12 || values.password.length > 32) {
    errors.password = 'Invalid password!'
    // must contains at least one number
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Password must contain at least one number!'
    // must contains at least one uppercase letter
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter!'
    // must contains at least one lowercase letter
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = 'Password must contain at least one lowercase letter!'
    // must not contain any spaces
  } else if (values.password.includes(' ')) {
    errors.password = 'Password must not contain any spaces!'
  }

  // can´t be empty
  if (!values.cpassword) {
    errors.cpassword = 'Confirm password is required!'
    // must be equal to password
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Passwords do not match!'
  }

  return errors
}
