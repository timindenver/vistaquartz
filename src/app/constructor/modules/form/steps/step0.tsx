//@ts-nocheck
import { useEffect } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import type { FormFields } from 'core/context/form'
import { useSender } from 'core/context/sender'
import { Controller, useFormContext } from 'react-hook-form'
import 'react-phone-number-input/style.css'

export const Step0 = () => {
  const sender = useSender()
  const {
    control,
    register,
    trigger,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useFormContext<FormFields>()

  useEffect(() => {
    sender.executeWhenFormsLoaded(() => {
      window.senderForms.render(['av2DQ5'], {
        initialStatus: 'enabled',
        onRender(formId) {
          const iframe = document.querySelector('iframe')
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document
          const form = iframeDoc.querySelector(`.sender-form-input-${formId} form`)

          if (form) {
            form.addEventListener('submit', (event) => {
              const formData = Object.fromEntries(new FormData(event.target).entries())
              const email = formData.email
              const phone = formData.phone

              const interval = setInterval(() => {
                const isSuccessfullySubmitted = window.getComputedStyle(iframeDoc.querySelector('.sender-form-success')).display !== 'none'
                if (isSuccessfullySubmitted) {
                  clearErrors('0.formSubmitted')
                  setValue('0.formSubmitted', {
                    email,
                    phone,
                  })
                  trigger()
                  clearInterval(interval)
                }
              }, 100)
            })
          }
        },
      })
    })
  }, [])

  return (
    <Flex w='100%' flexDir='column' gap='8'>
      <Flex w='100%' flexDir='column' gap='md'>
        {!isValid && (
          <Text textStyle='subheader' color='blue.dark' textAlign='center'>
            Contact info
          </Text>
        )}
        <Flex flexDir='column' alignItems='center'>
          <Controller
            control={control}
            name='0.formSubmitted'
            rules={{
              required: {
                value: true,
                message: 'Please submit the form',
              },
            }}
            render={() => {
              return (
                <Flex maxH='700px' overflowY='hidden'>
                  {sender.RenderContactInfoForm}
                </Flex>
              )
            }}
          />

          {errors?.[0]?.formSubmitted && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.formSubmitted?.message}
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
