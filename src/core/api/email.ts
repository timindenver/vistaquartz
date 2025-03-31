import { api } from './axios'

export const sendEmail = async () => {
  const response = await api.post('/verify/send', {
    email: 'tigran.balayan.u@gmail.com',
    template: {
      name: 'verification',
      code: 11111,
    },
  })
  return response
}
