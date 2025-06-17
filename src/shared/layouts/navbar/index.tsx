import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { useStickyNavbarAnimation } from 'core/hooks/useStickyNavbarAnimation'
import { NavLink } from 'react-router-dom'
import Logo from 'shared/assets/images/logoTransparent.png'

const Navbar = () => {
  const { navRef, isSticky } = useStickyNavbarAnimation()

  return (
    <>
      <Flex
        ref={navRef}
        w='100%'
        h={{ base: '140px', md: '200px' }}
        gap={{ md: '5rem', base: '1rem' }}
        justifyContent='center'
        bg='rgba(43,71,92, 0.71)'
        top={isSticky ? 0 : 'auto'}
        position={isSticky ? 'fixed' : 'relative'}
        transition='top 0.3s ease, background-color 0.23s ease, padding 0.3s ease'
        zIndex={1000}
        alignItems='center'
        px='1rem'
      >
        <NavLink to='/'>
          <Image src={Logo} w={{ base: '132px', md: '189px' }} h={{ base: '58px', md: '101px' }} objectFit='contain' />
        </NavLink>

        <Flex flexDir='column' gap='1rem' color='#FFFFFF'>
          <Text fontSize={{ base: '11px', md: '25px' }} fontWeight='extralight' maxW={{ base: '200px', md: 'unset' }}>
            The grout-free Shower or Bath You've Always Wanted
          </Text>
          <Text fontSize={{ base: '11px', md: '24px' }} fontStyle='italic' textAlign='right'>
            720-807-3626
          </Text>
        </Flex>
      </Flex>
      {isSticky && <Box height='140px' />}
    </>
  )
}

export default Navbar
