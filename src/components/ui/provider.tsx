'use client'

import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react'

import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'
import { recipes } from './theme/recipes'
import { textStyles } from './theme/textStyles'
import { tokens } from './theme/tokens'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens,
    textStyles,
    recipes,
  },
})

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
