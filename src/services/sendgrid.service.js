const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
console.log('SENDGRID_API_KEY', process.env.SENDGRID_API_KEY)

export default async function sendEmail(bodyEmail) {
  try {
    const msg = {
      to: process.env.SENDGRID_TO_ADDRESS,
      from: process.env.SENDGRID_FROM_ADDRESS,
      subject: `${bodyEmail.subject}`,
      text: `${bodyEmail}`,
      html: `<div>${bodyEmail}</div>`,
    }

    const response = await sgMail.send(msg)

    if (response[0].statusCode === 202) {
      console.log('Email sent successfully')
      return {
        status: 200,
        message: 'Email sent successfully',
      }
    } else {
      console.log('Error sending email')
      return {
        status: 500,
        message: 'Error sending email',
      }
    }
  } catch (error) {
    console.log(error)
    return {
      status: error?.status || 500,
      message: error?.message || 'Some error occurred while sending email',
    }
  }
}
