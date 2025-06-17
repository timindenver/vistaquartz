import { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'

import Footer from './footer'
import Navbar from './navbar'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex w='100%' h='fit-content' minH='100%' direction='column' mx='auto'>
      <Navbar />

      <Flex height='100%' flex={1} flexDir='column'>
        {children}
      </Flex>
      <Footer />
    </Flex>
  )
}
