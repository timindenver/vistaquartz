import { Button, Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate('/')
  }

  return (
    <Flex
      w='100%'
      h='100%'
      my='auto'
      justifyContent='center'
      alignItems='center'
      fontSize={{ base: '3xl', xl: '4xl' }}
      direction='column'
      gap={4}
    >
      <Text>404 | Page Not Found</Text>
      <Button
        cursor='pointer'
        color={'var(--chakra-colors-text-white)'}
        onClick={handleGoBack}
        py={3}
        px={45}
        backgroundColor='var(--chakra-colors-primary-accent)'
      >
        Go Back
      </Button>
    </Flex>
  )
}
