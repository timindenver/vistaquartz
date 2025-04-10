import { type Dispatch, type SetStateAction, useEffect, useState } from 'react'

import { Button, Flex, Text } from '@chakra-ui/react'
import { PinInput } from '@chakra-ui/react'
import { sendEmailVerification, verifyEmail } from 'core/api/verification'
import type { FormFields } from 'core/context/form'
import { Controller, useFormContext } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { CustomizedInput } from 'shared/components/input'

import './styles.scss'

type Step0Props = {
  emailVerified: boolean
  setEmailVerified: Dispatch<SetStateAction<boolean>>
}

export const Step0 = ({ emailVerified, setEmailVerified }: Step0Props) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  const {
    control,
    formState: { errors },
    setError,
  } = useFormContext<FormFields>()

  const [emailVerificationCodeSent, setEmailVerificationCodeSent] = useState(false)
  const [emailVerificationCode, setEmailVerificationCode] = useState(['', '', '', '', ''])
  const [countdown, setCountdown] = useState(0)

  useEffect(() => {
    let intervalId: any

    if (countdown && countdown > 0) {
      intervalId = setInterval(() => {
        setCountdown((prev) => prev - 1)
      }, 1000)
    }

    return () => clearInterval(intervalId)
  }, [countdown, countdown])

  const handleSendVerificationCode = async (email: string) => {
    if (!emailRegex.test(email)) {
      setError('0.email', { message: 'Please select a valid email' })
      return
    }

    const req = await sendEmailVerification({ email })
    if (!req?.data?.success) {
      setError('0.email', { message: 'Something went wrong, please try again later' })
    } else {
      setEmailVerificationCodeSent(true)
      setCountdown(60)
    }
  }

  const handleVerifyEmail = async (email: string) => {
    const req = await verifyEmail({ email, code: emailVerificationCode[0] + emailVerificationCode[1] + emailVerificationCode[2] + emailVerificationCode[3] + emailVerificationCode[4] })
    if (!req?.data?.success) {
      setError('0.emailVerified', { message: 'Invalid verification code' })
      return false
    } else {
      setEmailVerified(true)
      return true
    }
  }

  return (
    <Flex w='100%' flexDir='column' gap='md'>
      <Text textStyle='subheader' color='blue.dark'>
        Contact info
      </Text>
      <Flex flexDir='column' gap='20px'>
        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='0.firstName'
            rules={{
              required: {
                value: true,
                message: 'Please enter your first name',
              },
            }}
            render={({ field: { name: controllerName, ref: controllerRef, value: controllerValue, onChange: controllerOnChange, onBlur: controllerOnBlur } }) => {
              const haveError = errors?.[0]?.firstName

              return (
                <CustomizedInput
                  name={controllerName}
                  ref={controllerRef}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  onBlur={controllerOnBlur}
                  placeholder='First Name'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={haveError ? 'var(--chakra-colors-error)' : 'focus-ring-color'}
                />
              )
            }}
          />
          {errors?.[0]?.firstName && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.firstName?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='0.lastName'
            rules={{
              required: { value: true, message: 'Please enter your last name' },
            }}
            render={({ field: { name: controllerName, ref: controllerRef, value: controllerValue, onChange: controllerOnChange, onBlur: controllerOnBlur } }) => {
              const haveError = errors?.[0]?.lastName

              return (
                <CustomizedInput
                  name={controllerName}
                  ref={controllerRef}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  onBlur={controllerOnBlur}
                  placeholder='Last Name'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={haveError ? 'var(--chakra-colors-error)' : 'focus-ring-color'}
                />
              )
            }}
          />
          {errors?.[0]?.lastName && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.lastName?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='0.emailVerified'
            rules={{
              required: {
                value: true,
                message: 'Please verify your email address',
              },
              value: true,
            }}
            render={({ field: { onChange: controllerVerifyOnChange } }) => {
              return (
                <Controller
                  control={control}
                  name='0.email'
                  rules={{
                    required: {
                      value: true,
                      message: 'Please enter your email address',
                    },
                  }}
                  render={({ field: { name: controllerName, ref: controllerRef, value: controllerValue, onChange: controllerOnChange, onBlur: controllerOnBlur } }) => {
                    const haveError = errors?.[0]?.email

                    return (
                      <Flex flexDir='column' gap='md'>
                        <CustomizedInput
                          name={controllerName}
                          type='email'
                          ref={controllerRef}
                          value={controllerValue}
                          onChange={controllerOnChange}
                          onBlur={controllerOnBlur}
                          placeholder='Email'
                          borderColor={haveError ? 'error' : 'transparent'}
                          outline={haveError ? 'var(--chakra-colors-error)' : 'focus-ring-color'}
                        />
                        {!emailVerified && controllerValue && (
                          <Flex>
                            <Text
                              textStyle='description'
                              color={countdown > 0 ? 'blue.medium' : emailVerificationCodeSent ? 'blue.medium' : 'blue.dark'}
                              cursor={countdown > 0 ? 'default' : emailVerificationCodeSent ? 'default' : 'pointer'}
                              onClick={async () => {
                                handleSendVerificationCode(controllerValue)
                              }}
                            >
                              {emailVerificationCodeSent ? 'Resend' : 'Send verification code'}
                            </Text>
                          </Flex>
                        )}
                        {!emailVerified && emailVerificationCodeSent && (
                          <Flex gap='md'>
                            <PinInput.Root otp value={emailVerificationCode} onValueChange={(e) => setEmailVerificationCode(e.value)}>
                              <PinInput.HiddenInput />
                              <PinInput.Control>
                                <PinInput.Input index={0} />
                                <PinInput.Input index={1} />
                                <PinInput.Input index={2} />
                                <PinInput.Input index={3} />
                                <PinInput.Input index={4} />
                              </PinInput.Control>
                            </PinInput.Root>
                            <Button
                              h='40px'
                              size='xl'
                              onClick={async () => {
                                controllerVerifyOnChange(await handleVerifyEmail(controllerValue))
                              }}
                            >
                              Verify
                            </Button>
                          </Flex>
                        )}
                      </Flex>
                    )
                  }}
                />
              )
            }}
          />

          {errors?.[0]?.emailVerified && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.emailVerified?.message}
            </Text>
          )}
          {errors?.[0]?.email && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.email?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='0.phone'
            rules={{
              required: {
                value: true,
                message: 'Please enter your phone number',
              },
            }}
            render={({ field: { name: controllerName, ref: controllerRef, value: controllerValue, onChange: controllerOnChange, onBlur: controllerOnBlur } }) => {
              const haveError = errors?.[0]?.phone

              return (
                <PhoneInput
                  name={controllerName}
                  ref={controllerRef}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  onBlur={controllerOnBlur}
                  className={haveError ? 'PhoneInputError' : ''}
                  placeholder='Enter phone number'
                  international={false}
                  defaultCountry='US'
                />
              )
            }}
          />
          {errors?.[0]?.phone && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.phone?.message}
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
