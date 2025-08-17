import { type Dispatch, type SetStateAction, useEffect, useRef, useState } from 'react'

import { Flex, Text } from '@chakra-ui/react'
import type { FormFields } from 'core/context/form'
import { Controller, useFormContext } from 'react-hook-form'
import 'react-phone-number-input/style.css'

type Step0Props = {
  setActiveFormStep: Dispatch<SetStateAction<number>>
}

export const Step0 = ({ setActiveFormStep }: Step0Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [height, setHeight] = useState('0px')

  const onLoad = () => {
    const iframe = iframeRef.current
    if (!iframe) return

    const iframeDoc = iframe.contentDocument || (iframe.contentWindow ? iframe.contentWindow.document : null)
    if (!iframeDoc) return

    if (iframeDoc?.body) {
      const iframeHeight = iframeDoc.body.scrollHeight
      setHeight(iframeHeight + 'px')
    }

    if (iframeDoc) {
      const submitButton = iframeDoc.querySelector('button.primary[type="submit"]') as HTMLButtonElement | null
      if (submitButton) {
        submitButton.onclick = () => {
          const targetNode = iframeDoc.querySelector('div.ml-form-successBody.row-success')

          if (!targetNode) return

          const observer = new MutationObserver(() => {
            const isVisible = window.getComputedStyle(targetNode).display !== 'none'
            if (isVisible) {
              observer.disconnect()

              clearErrors('0.formSubmitted')
              setValue('0.formSubmitted', true)
              setActiveFormStep(1)
              trigger()
            }
          })

          observer.observe(targetNode, {
            attributes: true,
            attributeFilter: ['style', 'class'],
            subtree: false,
          })
        }
      }
    }
  }

  const {
    control,
    trigger,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useFormContext<FormFields>()

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
                <Flex w='100%' justifyContent='center'>
                  <iframe ref={iframeRef} src='mailerlite.html' title='Mailerlite' style={{ width: '100%', height }} onLoad={onLoad} scrolling='no' frameBorder='0' />
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
