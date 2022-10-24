import emailjs from '@emailjs/browser'

export const sendEmail = async (templateId, templateParams) => {
  emailjs
    .send('service_ykgk65k', templateId, templateParams, 'dlXeQ41VCK7ujQWUq')
    .then(
      (response) => {
        console.log('Email sent SUCCESS!', response.status, response.text)
      },
      (err) => {
        console.log('Email sending FAILED...', err)
      }
    )
}
