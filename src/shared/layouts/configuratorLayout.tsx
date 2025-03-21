import type { ReactNode } from 'react'

import { Flex, useBreakpointValue } from '@chakra-ui/react'

type ConfiguratorLayoutProps = {
  children: ReactNode
  activeStep: number
}

export const ConfiguratorLayout = ({
  children,
  activeStep,
}: ConfiguratorLayoutProps) => {
  const getLayoutSize = () => {
    if (activeStep === 0) {
      return {
        w: useBreakpointValue({ base: '100%', xl: 'calc(100% - 40px)' }),
        h: useBreakpointValue({ base: '100%', xl: 'calc(100% - 40px)' }),
      }
    } else if (activeStep === 1) {
      return {
        w: '100%',
        h: '100%',
      }
    } else if (activeStep === 2) {
      return {
        w: useBreakpointValue({ base: '100%', xl: 'calc(100% - 40px)' }),
        h: useBreakpointValue({ base: '100%', xl: 'calc(100% - 40px)' }),
      }
    }
  }

  return (
    <Flex
      w='100%'
      h='100%'
      minH='fit-content'
      alignItems='center'
      justifyContent='center'
      bg='blue.light'
    >
      <Flex
        w={getLayoutSize()?.w}
        h={getLayoutSize()?.h}
        minH='fit-content'
        bg={activeStep === 1 ? 'blue.light' : 'white'}
        alignItems='center'
        pos='relative'
      >
        {children}
      </Flex>
    </Flex>
  )
}
