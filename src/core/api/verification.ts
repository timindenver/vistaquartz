import type { AxiosResponse } from 'axios'

import { api } from './axios'

type SendEmailVerificationProps = { email: string }
type VerifiyEmailProps = { email: string; code: string }

export const sendEmailVerification = async ({ email }: SendEmailVerificationProps) => {
  const result: AxiosResponse<{ success: boolean }> = await api.post('/verify/send', { email })
  return result
}

export const verifyEmail = async ({ email, code }: VerifiyEmailProps) => {
  const result: AxiosResponse<{ success: boolean }> = await api.post('/verify', { email, code })
  return result
}
