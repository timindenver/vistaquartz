import { defineTextStyles } from '@chakra-ui/react'

export const textStyles = defineTextStyles({
  header: {
    value: {
      fontFamily: 'Epilogue',
      fontSize: { base: '20px', xl: '34px' },
      fontWeight: { base: 'semibold', xl: 'bold' },
      lineHeight: { base: '140%', xl: '125%' },
    },
  },
  subheader: {
    value: {
      fontFamily: 'Epilogue',
      fontSize: { base: '16px', xl: '22px' },
      fontWeight: { base: 'semibold', xl: 'bold' },
      lineHeight: { base: '140%', xl: '140%' },
    },
  },
  description: {
    value: {
      fontFamily: 'Epilogue',
      fontSize: '15px',
      fontWeight: 'medium',
      lineHeight: '22px',
    },
  },
  smallText: {
    value: {
      fontFamily: 'Epilogue',
      fontSize: { base: '15px', xl: '18px' },
      fontWeight: { base: 'semibold', xl: 'bold' },
      lineHeight: '22px',
    },
  },
  categories: {
    value: {
      fontFamily: 'Epilogue',
      fontSize: { base: '18px' },
      fontWeight: { base: 'semibold' },
      lineHeight: 'normal',
    },
  },
  button: {
    value: {
      fontFamily: 'Epilogue',
      fontSize: '17px',
      fontWeight: 'normal',
      lineHeight: 'normal',
    },
  },
})
