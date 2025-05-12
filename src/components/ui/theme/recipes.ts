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
        selected: {
          w: 'fit-content',
          h: '50px',
          bg: 'white',
          color: 'blue.dark',
          border: '2px solid var(--chakra-colors-blue-dark)',
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
