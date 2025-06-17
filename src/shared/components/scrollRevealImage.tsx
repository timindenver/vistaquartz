import { Flex } from '@chakra-ui/react'
import { Parallax } from 'react-parallax'

type ScrollRevealImageProps = {
  src: string
  containerMaxHeight?: number
  strength?: number
  imageStyles?: any
}

export const ScrollRevealImage = ({ src, containerMaxHeight, strength = 100, imageStyles }: ScrollRevealImageProps) => {
  return (
    <Flex w='100%' h={containerMaxHeight ? containerMaxHeight + 'px' : '100%'}>
      <Parallax bgImage={src} strength={strength} style={{ width: '100%', height: '100%' }} bgImageStyle={{ height: '100%', objectFit: 'cover', ...imageStyles }}></Parallax>
    </Flex>
  )
}
