import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

import { recipes } from './recipes'
import { textStyles } from './textStyles'
import {tokens} from './tokens'
const config = defineConfig({
  theme: {
    recipes,
    textStyles,
    tokens,
  },
})

export const system = createSystem(defaultConfig, config)
