import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import CommunicationIcon from 'shared/assets/icons/communicationIcon'
import CraftsmanshipIcon from 'shared/assets/icons/craftsmanshipIcon'
import ExperienceIcon from 'shared/assets/icons/experienceIcon'
import MaterialsIcon from 'shared/assets/icons/materialsIcon'
import AboutImage2 from 'shared/assets/images/Inaturali_compressedhero.jpg'
import AboutImage from 'shared/assets/images/colorado.jpg'
import { ScrollRevealImage } from 'shared/components/scrollRevealImage'

const About = () => {
  const aboutParagraphs = [
    "VistaQuartz began because we wanted to give our clients the best shower possible for the money. I've been in the bath and shower industry for years and have inspected thousands of bathrooms that have failed due to porous grout, incorrectly installed pans, cracked tubs, and other issues.",

    'Many of these failures are due to a bit of arrogance or ignorance on the part of mostly well-meaning contractors who do not follow the manufacturers specific installation guidelines.',

    'Many more failures are due to the simple fact that grout is simply not a good material for use in a shower that gets daily use.',

    'So we are here to offer our expertise, advise, guidance and professionalism.',

    'We make every customer these three promises:',
  ]

  const customerPromises = [
    '1. We will complete every project with the same care, precision and craftsmanship that we would if it were our own home.',
    '2. We will NEVER deviate from Industry standard practices established by associations like the NTCA, TCNA, CTEF and each manufacturer of the products we install.',
    '3. We will communicate at every step of the project and keep you involved in the process.',
  ]

  const introText =
    'At Vista Quartz Bath & Shower Remodel, we are dedicated to transforming your bath and shower spaces with large, natural surface slab walls that eliminate the need for grout. Our mission is to provide top-rated remodeling services backed by 30 years of industry experience. We take pride in delivering quality that lasts, offering personalized solutions to meet your unique needs and preferences.'

  const coreValues = [
    {
      title: 'Communication',
      icon: CommunicationIcon,
      iconMarginTop: { base: '0rem', md: '0.1rem' },

      content: ['We believe homeowners should expect clear, upfront and concise communication about their projects both before during and after the work is complete.', 'You can expect that from us.'],
    },
    {
      title: 'Experience',
      icon: ExperienceIcon,
      iconMarginTop: { base: '0.5rem', md: '0.8rem' },
      content: [
        "There's no substitute for experience and if you decide to work with us you'll be working with experienced professionals. You can count on us to bring the knowledge of that experience to your project.",
      ],
    },
    {
      title: 'Premium Materials',
      icon: MaterialsIcon,
      iconMarginTop: { base: '0rem', md: '0.4rem' },
      content: [
        "Vista Quartz began with the goal to make an ultra-premium product available to everyday homeowners so that wouldn't have to sacrifice luxury and design.",
        'Through our strong focus on efficiency and process we are able to bring you high-end materials at a price you can afford.',
      ],
    },
    {
      title: 'Uncommon Craftsmanship',
      icon: CraftsmanshipIcon,
      iconMarginTop: { base: '0rem', md: '0.4rem' },
      content: [
        "It's getting harder and harder to find quality craftsmanship in residential construction these days.",
        'You can expect attention to details and a strict focus on care and quality from the first hour of demo to the last bead of sealant.',
      ],
    },
  ]

  const careerSection = {
    title: 'Build Your Future with Us',
    content:
      "Do you have a passion for quality and the energy to give your best every day? If you think you would enjoy bringing the best home remodeling experience to Colorado customers we'd like to talk to you.",
  }

  return (
    <>
      <Helmet>
        <title>About - Vista Quartz Showers</title>
        <meta
          name='description'
          content='Vista Quartz Showers specializes in transforming bathrooms with high-quality quartz and porcelain showers. Learn about our mission, experience, and commitment.'
        />
        <meta name='keywords' content='about us, quartz shower specialists, bathroom renovations, company mission, experience, quartz porcelain remodeling' />
      </Helmet>

      <Flex w='100%' h={{ base: '200px', md: '240px' }} position='relative'>
        <Image src={AboutImage} w='100%' h='full' objectFit='cover' />
        <Text fontSize={{ base: '24px', md: '42px' }} color='#12222E' position='absolute' fontWeight='extralight' left={{ base: '1.3rem', md: '5rem' }} top='50%' transform='translateY(-50%)'>
          We all deserve better showers...
        </Text>
      </Flex>

      <Flex px='1rem'>
        <Flex bg='#F2F2F2' w='100%' flexDir='column' gap='1rem' mt='1rem' pl={{ md: '1rem' }} pt='1rem' pb='6rem' px={{ base: '2rem' }}>
          {aboutParagraphs.map((paragraph, index) => (
            <Text key={index} fontSize={{ base: '10px', md: '16px' }} color='#12222E' maxW='740px' fontWeight='light'>
              {paragraph}
            </Text>
          ))}

          <Flex flexDir='column' gap='0.3rem'>
            {customerPromises.map((promises, index) => (
              <Text key={index} fontSize={{ base: '10px', md: '16px' }} color='#12222E' maxW='890px' fontWeight='light'>
                {promises}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex px='1rem' mt='1rem'>
        <Flex bg='#12222E' w='100%' p='4rem' pb='6rem' pl='2rem'>
          <Text fontSize='16px' color='#FFFFFF' maxW='500px' fontWeight='light'>
            {introText}
          </Text>
        </Flex>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} mt={{ base: '0.5rem', md: '1rem' }} mx='1rem'>
        {coreValues.map((section, index) => {
          const Icon = section.icon
          return (
            <GridItem key={index} p={8} bg='#CFDDE9'>
              <Flex flexDir='row' gap='1rem' align='flex-start' mb='1rem'>
                <Text fontSize={{ base: '18px', md: '24px' }} fontWeight='medium' color='#132330'>
                  {section.title}
                </Text>
                <Box mt={section.iconMarginTop}>
                  <Icon />
                </Box>
              </Flex>

              <Flex flexDir='column' gap='0.3rem'>
                {section.content.map((para, id) => (
                  <Text key={id} fontSize={{ base: '16px', md: '16px' }} color='#12222E' maxW='424px' fontWeight='light'>
                    {para}
                  </Text>
                ))}
              </Flex>
            </GridItem>
          )
        })}
      </Grid>

      <Flex flexDir={{ base: 'column', md: 'row' }} gap='2rem' w='100%' h='fit-content' mt='1rem' px='1rem'>
        <Flex flexDir='column' gap='1rem' bg='#F2F2F2' flex='1' p='4rem'>
          <Text color='#12222E' fontSize='24px'>
            {careerSection.title}
          </Text>

          <Text color='#132330' fontSize='16px' fontWeight='light' maxW='397px'>
            {careerSection.content}
          </Text>
        </Flex>
      </Flex>

      <Flex my='1rem' px='1rem'>
        <ScrollRevealImage src={AboutImage2} containerMaxHeight={330} strength={0} imageStyles={{ 'object-position': 'left top' }} />
      </Flex>
    </>
  )
}

export default About
