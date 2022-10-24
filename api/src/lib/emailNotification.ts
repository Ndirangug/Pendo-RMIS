import axios from 'axios'

export const sendEmail = async (templateId, templateParams) => {
  axios
    .post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: 'service_ykgk65k',
      template_id: templateId,
      user_id: 'dlXeQ41VCK7ujQWUq',
      template_params: templateParams,
      accessToken: 'EL_9gryMkuHoYu2_pQcTO',
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
}
