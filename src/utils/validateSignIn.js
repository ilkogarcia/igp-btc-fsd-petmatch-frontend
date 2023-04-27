/* eslint-disable import/no-anonymous-default-export */
/**
 * @fileoverview This file contains the validation functions for the login forms.
 */

export default function validateSignIn(values) {
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
  } else if (values.password.length < 8 || values.password.length > 32) {
    errors.password = 'Invalid password!'
    // must not contain any spaces
  } else if (values.password.includes(' ')) {
    errors.password = 'Invalid password!'
  }

  return errors
}
