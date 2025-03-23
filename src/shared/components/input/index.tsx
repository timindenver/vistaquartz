import type { RefAttributes } from 'react'

import { Input, type InputProps } from '@chakra-ui/react'

export const CustomizedInput = ({
  ...props
}: InputProps & RefAttributes<HTMLInputElement>) => {
  return (
    <Input
      w='100%'
      h='42px'
      py='md'
      bg='blue.light'
      color='black'
      fontSize='17px'
      borderWidth='1px'
      borderStyle='solid'
      borderColor='transparent'
      borderRadius='0'
      _placeholder={{ color: '#3c3c3c99' }}
      {...props}
    />
  )
}
