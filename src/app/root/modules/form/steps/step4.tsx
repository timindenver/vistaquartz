import type { Dispatch, SetStateAction } from 'react'

import { Button, Flex, Text } from '@chakra-ui/react'

type Step4Props = {
  setActiveStep: Dispatch<SetStateAction<number>>
  isMobile: boolean | undefined
}

export const Step4 = ({ setActiveStep, isMobile }: Step4Props) => {
  return (
    <Flex h={{ base: '100%', xl: 'fit-content' }} flexDir='column' gap='40px'>
      {isMobile && <Flex flex='1'></Flex>}
      <Flex flex='1' flexDir='column' justifyContent='center' gap='md'>
        <Text textStyle='header' color='blue.dark' textAlign='center'>
          Thank you! You will receive your estimate via [chosen method] within
          48 hours
        </Text>
        <Text textStyle='subheader' color='blue.dark' textAlign='center'>
          We may reach out with additional questions or clarifications
        </Text>
      </Flex>
      <Flex
        w='100%'
        flex='1'
        flexDir={{ base: 'column', xl: 'row' }}
        justifyContent={{ base: 'flex-end', xl: 'unset' }}
        gap='sm'
      >
        <Button
          w={{ base: '100%', xl: 'unset' }}
          flex={{ base: 'unset', xl: 1 }}
          onClick={() => {
            setActiveStep(1)
          }}
        >
          Back to Configurator
        </Button>
        <Button
          w={{ base: '100%', xl: 'unset' }}
          flex={{ base: 'unset', xl: 1 }}
          bg='blue.light'
          color='blue.dark'
          onClick={() => {
            window.location.reload()
          }}
        >
          Main Website
        </Button>
      </Flex>
    </Flex>
  )
}
