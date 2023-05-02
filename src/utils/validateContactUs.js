/* eslint-disable import/no-anonymous-default-export */
/**
 * @fileoverview This file contains the validation functions for the Contact Us forms.
 */

export default function validateContactUs(values) {
  const errors = {}

  // can´t be empty
  if (!values.email) {
    errors.email = 'Email address is required to contact you!'
    // must be a valid email address
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'This is not a valid email address!'
  }

  // can´t be empty
  if (!values.fullname) {
    errors.fullname = 'We need your name to know who you are!'
  }

  // can´t be empty
  if (!values.subject) {
    errors.subject = 'A subject for your message is required!'
  }

  // can´t be empty
  if (!values.message) {
    errors.message =
      'Sorry but we need a message to know what you want to tell us!'
  }

  return errors
}
