import { type Dispatch, type SetStateAction, useState } from 'react'

import { Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { submitData, submitImages } from 'core/api/submit'
import type { FormFields } from 'core/context/form'
import { useSelection } from 'core/context/selection'
import { useFormContext } from 'react-hook-form'
import type { ImageListType } from 'react-images-uploading'
import ArrowLeftIcon from 'shared/assets/icons/arrowLeft'

import { Step0 } from './steps/step0'
import { Step1 } from './steps/step1'
import { Step2 } from './steps/step2'
import { Step3 } from './steps/step3'
import { Step4 } from './steps/step4'

type FormProps = {
  setActiveStep: Dispatch<SetStateAction<number>>
}

export type FORM_STEPS_TYPE = {
  title: string
}[]

const FORM_STEPS: FORM_STEPS_TYPE = [
  {
    title: 'Info',
  },
  {
    title: 'Location',
  },
  {
    title: 'Contact',
  },
  {
    title: 'Photo',
  },
]

export const Form = ({ setActiveStep }: FormProps) => {
  const selection = useSelection()
  const isMobile = useBreakpointValue({ base: true, xl: false })

  const [activeFormStep, setActiveFormStep] = useState(0)
  const [uploadedImages, setUploadedImages] = useState<ImageListType>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    getValues,
    trigger,
    formState: { isValid },
  } = useFormContext<FormFields>()

  const handleGoNextStep = async () => {
    trigger()

    if (!isValid) {
      return
    }

    if (activeFormStep === 3) {
      await handleSubmitRequest()
    }

    setActiveFormStep((prev) => prev + 1)
  }

  const handleSubmitRequest = async () => {
    const formData = getValues()

    const { items: fixtureOptionItems } = selection?.selectionData?.fixtureOption ?? {}
    const validKeys: (keyof typeof fixtureOptionItems)[] = ['handShowerWand', 'shelf']
    const plumbingFixturesItems = validKeys.filter((key) => fixtureOptionItems?.[key])

    const additionalItems = selection?.selectionData?.additionalItems

    setIsSubmitting(true)

    try {
      const imagesFolderId = window.crypto.randomUUID()

      const submitRequest = await submitData({
        body: {
          layout: selection?.selectionData?.layout || '',
          handling: selection?.selectionData?.handling || '',
          wallColor: selection?.selectionData?.wallColor,
          plumbingFixturesColor: selection?.selectionData?.fixtureOption?.color,
          plumbingFixturesItems: plumbingFixturesItems?.length > 0 ? JSON.stringify(plumbingFixturesItems) : null,
          additionalItems: additionalItems?.length > 0 ? JSON.stringify(additionalItems) : null,
          city: formData?.[1]?.city,
          street: formData?.[1]?.street,
          state: formData?.[1]?.state,
          zip: formData?.[1]?.zip,
          propertyOwner: formData?.[2]?.confirmation,
          imagesFolderId,
        },
      })

      const submitRequestSuccessful = submitRequest?.data?.success || false

      if (submitRequestSuccessful && uploadedImages?.length > 0) {
        await submitImages({
          images: uploadedImages,
          imagesFolderId,
        })
      }
    } catch (error) {
      console.warn(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Flex w='100%' h='100%' minH='fit-content' flexDir='column' py='32px' pt={{ base: 'md', xl: '32px' }}>
      {activeFormStep < 4 && (
        <Flex w='100%' h='fit-content' alignItems='center' px={{ base: 'unset', xl: '32px' }}>
          {!isMobile && (
            <Flex
              flex={1}
              alignItems='center'
              gap='10px'
              cursor='pointer'
              onClick={() => {
                activeFormStep > 0 && setActiveFormStep((prev) => prev - 1)
              }}
            >
              {activeFormStep !== 0 && (
                <>
                  <ArrowLeftIcon width='12.16px' height='20.38px' color='var(--chakra-colors-blue-dark)' />
                  <Text textStyle='smallText' color='blue.dark'>
                    Back
                  </Text>
                </>
              )}
            </Flex>
          )}

          <Flex flex={4} justifyContent='center'>
            <Flex
              w='100%'
              maxW={{ base: 'unset', xl: '520px' }}
              justifyContent='space-between'
              pb={{ base: 'md', xl: '32px' }}
              px={{ base: '24px', xl: 'unset' }}
              borderBottom='1px solid var(--chakra-colors-blue-dark)'
            >
              {FORM_STEPS.map((formStep, formStepIndex) => {
                const isActive = activeFormStep >= formStepIndex

                return (
                  <Flex key={formStep?.title + formStepIndex + 99948} flexDir={{ base: 'column', xl: 'row' }} w='fit-content' alignItems='center' gap={{ base: '8px', xl: 'md' }}>
                    <Flex
                      w='24px'
                      h='24px'
                      border='1px solid var(--chakra-colors-blue-dark)'
                      borderColor={isActive ? 'blue.dark' : 'blue.medium'}
                      bg={isActive ? 'blue.dark' : 'none'}
                      borderRadius='50%'
                      fontSize='16px'
                      alignItems='center'
                      justifyContent='center'
                    >
                      <Text textStyle='description' color={isActive ? 'white' : 'blue.medium'} pt='1px'>
                        {formStepIndex + 1}
                      </Text>
                    </Flex>
                    <Text textStyle='smallText' color={isActive ? 'blue.dark' : 'blue.medium'}>
                      {formStep.title}
                    </Text>
                  </Flex>
                )
              })}
            </Flex>
          </Flex>

          {!isMobile && <Flex flex='1'></Flex>}
        </Flex>
      )}

      <Flex w='100%' maxW='520px' h='100%' flexDir='column' justifyContent='space-between' mx='auto' mt='32px' px={{ base: 'md', xl: 'unset' }}>
        <form
          style={{
            margin: isMobile || activeFormStep !== 0 ? 'auto 0' : 'unset',
            height: '100%',
          }}
        >
          <Flex w='100%' h='100%' alignItems='center'>
            {activeFormStep === 0 && <Step0 setActiveFormStep={setActiveFormStep} />}
            {activeFormStep === 1 && <Step1 />}
            {activeFormStep === 2 && <Step2 />}
            {activeFormStep === 3 && <Step3 uploadedImages={uploadedImages} setUploadedImages={setUploadedImages} isMobile={isMobile} />}
            {activeFormStep === 4 && <Step4 setActiveStep={setActiveStep} isMobile={isMobile} />}
          </Flex>
        </form>
        {activeFormStep !== 0 && activeFormStep < 4 && (
          <Button w='100%' mt='20px' disabled={!isValid && activeFormStep === 0} onClick={handleGoNextStep}>
            {isSubmitting ? 'Submitting' : 'Go to the Next Step'}
          </Button>
        )}
      </Flex>
    </Flex>
  )
}
