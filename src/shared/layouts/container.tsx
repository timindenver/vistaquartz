import { Box, type BoxProps } from '@chakra-ui/react'

type ContainerVariant = 'containerFull' | 'containerLg' | 'container' | 'containerXS'

interface CustomContainerProps extends BoxProps {
  variant: ContainerVariant
}

export const CustomContainer = ({ variant, children, ...rest }: CustomContainerProps) => {
  const widths = {
    containerFull: { base: 'calc(100% - 2.5rem)', md: 'calc(100% - 5rem)' },
    containerLg: { base: 'calc(100% - 2.5rem)', md: 'calc(100% - 5rem)' },
    container: { base: 'calc(100% - 2.5rem)', md: 'calc(100% - 5rem)' },
    containerXS: { base: 'calc(100% - 2.5rem)', md: 'calc(100% - 5rem)' },
  }

  const maxWidths = {
    containerFull: 'unset',
    containerLg: widths['containerLg'],
    container: '73.125rem',
    containerXS: '59.375rem',
  }

  return (
    <Box w={widths[variant]} maxW={maxWidths[variant]} {...rest}>
      {children}
    </Box>
  )
}
