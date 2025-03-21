import { defineRecipe } from '@chakra-ui/react'

export const recipes = {
  button: defineRecipe({
    variants: {
      variant: {
        primary: {
          w: 'fit-content',
          h: '50px',
          bg: 'blue.dark',
          color: 'white',
          textAlign: 'center',
          textStyle: 'button',
          borderRadius: '0px',
        },
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }),
}
