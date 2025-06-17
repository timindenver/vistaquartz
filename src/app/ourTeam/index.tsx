import { Card, Flex, Image, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import FounderImage from 'shared/assets/images/founderImage.avif'
import OfficeManagerImage from 'shared/assets/images/officeManagerImage.avif'
import ProductManagerImage from 'shared/assets/images/productManagerImage.avif'
import TeachLeadImage from 'shared/assets/images/techLeadImage.avif'
import { CustomContainer } from 'shared/layouts/container'

const OurTeam = () => {
  const teamContent = {
    header: 'Our Team.',
    description: `This is your Team page. It's a great space to introduce your team and talk about what makes it special, such as your culture and work philosophy. Don't be afraid to illustrate personality and character to help users connect with your team.`,
  }

  const teamMembers = [
    {
      name: 'Don Francis',
      role: 'Founder & CEO',
      image: FounderImage,
    },
    {
      name: 'Ashley Jones',
      role: 'Tech Lead',
      image: TeachLeadImage,
    },
    {
      name: 'Tess Brown',
      role: 'Office Manager',
      image: OfficeManagerImage,
    },
    {
      name: 'Lisa Rose',
      role: 'Product Manager',
      image: ProductManagerImage,
    },
  ]
  return (
    <>
      <Helmet>
        <title>Team - Vista Quartz Showers</title>
        <meta name='description' content='Meet our expert team of skilled professionals dedicated to crafting premium quartz showers and baths with attention to detail and safety.' />
        <meta name='keywords' content='bath remodel team, quartz shower experts, professional installers, licensed contractors, remodeling specialists' />
      </Helmet>

      <Flex flexDir='column' gap='2rem' alignItems='center' mt={{ md: '5rem', base: '1rem' }}>
        <Flex flexDir='column' gap='2rem' color='#000000' mx='auto' px={{ base: '1rem' }}>
          <Text fontSize='56px' textAlign={{ base: 'center', md: 'left' }}>
            {teamContent.header}
          </Text>
          <Text fontSize='16px' maxW='670px' textAlign={{ base: 'center', md: 'left' }} fontWeight='light'>
            {teamContent.description}
          </Text>
        </Flex>

        <CustomContainer variant='containerFull' mx='auto' mt='3rem' mb='1rem' justifyItems='center' bg='#CFDDE9CC'>
          <Flex flexDir={{ base: 'column', md: 'row' }} gap={{ md: '2rem', base: '4rem' }} p='3rem'>
            {teamMembers.map((member, idx) => (
              <Card.Root key={idx} w='250px'>
                <Image src={member.image} alt={member.name} w='100%' h='full' objectFit='cover' />

                <Card.Footer
                  position='absolute'
                  color='#000000'
                  boxSizing='border-box'
                  bg='#FFFFFF'
                  alignItems='flex-start'
                  bottom='-2rem'
                  left='1rem'
                  display='flex'
                  flexDir='column'
                  gap='0.1rem'
                  w='250px'
                  pt='0.5rem'
                  pb='0.3rem'
                >
                  <Text fontSize='18px'>{member.name}</Text>
                  <Text fontSize='14px'>{member.role}</Text>
                </Card.Footer>
              </Card.Root>
            ))}
          </Flex>
        </CustomContainer>
      </Flex>
    </>
  )
}

export default OurTeam
