import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Link, NavLink } from 'react-router-dom'
import Logo from 'shared/assets/images/logoTransparent.png'

const Footer = () => {
  const footer = {
    links: [
      { label: 'Home', href: '/' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Our Team', href: '/team' },
      { label: 'Why Natural Solid Surface?', href: '/why-natural-solid-surface' },
      { label: 'About', href: '/about' },
      { label: 'Hall of Shame', href: '/hall-of-shame' },
      { label: 'Design Tool', href: '/design' },
    ],
    bottomSection: {
      copyright: '© 2025 by Vista Quartz, LLC. | View',
      privacyPolicy: { label: 'Privacy Policy', href: '/privacy-policy' },
    },
  }

  return (
    <Flex flexDir='column' fontSize={{ base: '9px', md: '13px' }} alignItems='center'>
      <Flex w='100%'>
        <Flex w='100%' h='fit-content' bg='#4C6D87' flexDir='row' gap='4rem' justify='center' py='2rem'>
          <Link to='/'>
            <Image src={Logo} w={{ base: '80px', md: '230px' }} h={{ base: '80px', md: '151px' }} objectFit='contain' />
          </Link>
          <Flex flexDir='column' fontWeight='light' color='#FFFFFF' fontSize={{ base: '10px', md: '20px' }} maxW='250px' gap='0.3rem'>
            <Flex flexDir='column' gap='0.2rem'>
              <Text>1500 N Grant Street</Text>
              <Text>Suite R</Text>
              <Text>Denver, CO 80203</Text>
            </Flex>
            <Link to='tel:+13037254368' style={{ width: 'fit-content' }}>
              <Text>303-725-4368</Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <Grid gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(7, 1fr)' }} gap={{ base: '1rem', md: '2rem' }} textAlign='center' justifyItems='center' w='full' bg='#2b475c' py='1rem'>
        {footer.links.map(({ label, href }, index) => (
          <Flex
            key={label}
            justifySelf={{
              base: index === footer.links.length - 1 ? 'center' : 'initial',
              md: 'initial',
            }}
          >
            <NavLink
              to={href}
              style={({ isActive }) => ({
                color: isActive ? '#ffffff' : '#ffffff90',
                textDecoration: 'none',
              })}
            >
              {label}
            </NavLink>
          </Flex>
        ))}
      </Grid>

      <Flex flexDir='row' gap='0.4rem' wrap='wrap' justify='center' textAlign='center' py='1rem'>
        <Text>{footer.bottomSection.copyright}</Text>
        <Text textDecoration='underline'>
          <NavLink to={footer.bottomSection.privacyPolicy.href}>{footer.bottomSection.privacyPolicy.label}</NavLink>
        </Text>
      </Flex>
    </Flex>
  )
}

export default Footer
