/* eslint-disable import/no-anonymous-default-export */
/**
 * @fileoverview This file contains the validation functions for the Register forms.
 */

export default function validateSignUp(values) {
  const errors = {}

  // can´t be empty
  if (!values.username) {
    errors.username = 'Username is required!'
    // must be between 3 and 12 characters
  } else if (values.username.length < 3 || values.username.length > 12) {
    errors.username = 'Username must be between 3 and 12 characters!'
    // must not contain any spaces
  } else if (values.username.includes(' ')) {
    errors.username = 'Username must not contain any spaces!'
    // can´t be a number
  } else if (!isNaN(values.username)) {
    errors.username = 'Username can´t be a number!'
    // can´t contain any special characters
  } else if (!/^[a-zA-Z0-9_]*$/.test(values.username)) {
    errors.username = 'Username can´t contain any special characters!'
  }

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
    // must contains at least one number
  } else if (!/\d/.test(values.password)) {
    errors.password = 'Password must contain at least one number!'
    // must contains at least one uppercase letter
  } else if (!/[A-Z]/.test(values.password)) {
    errors.password = 'Password must contain at least one uppercase letter!'
    // must contains at least one lowercase letter
  } else if (!/[a-z]/.test(values.password)) {
    errors.password = 'Password must contain at least one lowercase letter!'
    // must contains at least one special character
  } else if (!/[!@#$%^&*]/.test(values.password)) {
    errors.password = 'Password must contain at least one special character!'
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
