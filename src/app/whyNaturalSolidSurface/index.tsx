import { Box, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import CalacattaImage from 'shared/assets/images/calacatta3.jpg'
import ImageNorimage from 'shared/assets/images/norimage.avif'
import WomanImage from 'shared/assets/images/wom1.avif'
import { ScrollRevealImage } from 'shared/components/scrollRevealImage'

const WhyNaturalSolidSurface = () => {
  const vistaQuartzContent = [
    {
      header: 'Never Clean Grout Again',
      body: [
        'At Vista Quartz, we offer a luxurious and eco-friendly solution for your bath and shower remodel. Our large, natural surface slab walls with no grout not only enhance the aesthetics of your bathroom but also contribute to a sustainable environment.',
      ],
    },
    {
      header: 'Same Price as "One Day Plastic" guys',
      body: [
        "If you could have the beauty of seamless, grout-free quartz in your bath or shower rather than plastic...wouldn't you want to?",
        "There's enough plastic in our world these days...your shower should be your tranquil sanctuary.",
      ],
    },
    {
      header: "Plastic won't add Value",
      body: [
        'Elevate the value and aesthetics of your home with Vista Quartz Bath & Shower Remodel. Our premium materials and expert craftsmanship add a touch of sophistication and functionality to your space.',
        'Choose from Ultra-compact quartz, Porcelain, or Natural Stone materials.',
      ],
    },
    {
      header: 'Installed in just a Few Days',
      body: [
        'Our team of experts at Vista Quartz ensures meticulous planning and time-saving solutions for your bath and shower remodel. We streamline the process to bring your vision to life efficiently and seamlessly.',
      ],
    },
  ]

  const slabWallIntro = {
    title: 'Why Choose Large Natural Surface Slab Walls?',
    body: [
      'Our large natural surface slab walls are a game-changer for bath and shower remodels. They offer a seamless and elegant look to your bathroom, eliminating the hassle of grout maintenance. Experience the ultimate sophistication and durability with Vista Quartz Bath & Shower Remodel.',
      "We take pride in our no-hassle, easy process and we guarantee this will be the easiest, most enjoyable home improvement project you've ever experienced!",
    ],
  }

  const homeConsultationContent = [
    {
      title: 'In-Home Design Consultation',
      body: [
        'Struggling with where to start?',
        'Your "wet space" is where to start in the bathroom. It\'s the focal point of your room.',
        "Once you've nailed the design, colors and options for your bath or shower the rest of the room design will fall into place!",
        'We can help with all of this.',
      ],
    },
    {
      title: 'We are complete turnkey installers',
      body: ['Leave it all to us. Demo, plumbing, installation and haul-away of your old bath or shower is all included in one guaranteed price.'],
    },
    {
      title: "You love your quartz countertop...You'll love your shower even more!",
      body: [
        "With Vista Quartz Bath & Shower Remodel, it's time to experience the transformation of your bath and shower space. Our team is dedicated to bringing your vision to life, creating a luxurious and functional oasis within your home.",
      ],
    },
  ]

  const homeConsultationTop = homeConsultationContent.slice(0, 2)
  const homeConsultationFinal = homeConsultationContent[2]

  return (
    <>
      <Helmet>
        <title>Why Natural Solid Surface - Vista Quartz Showers</title>
        <meta name='description' content='Discover why natural solid surfaces like quartz and porcelain are ideal for bath and shower remodels—durable, low‑maintenance, and elegant.' />
        <meta name='keywords' content='natural solid surface benefits, quartz durability, porcelain shower walls, non-porous surfaces, easy maintenance' />
      </Helmet>

      <Flex w='100%' h='fit-content' position='relative'>
        <Image src={CalacattaImage} w='100%' h='full' objectFit='cover' />
        <Text fontSize={{ base: '20px', md: '44px' }} color='#12222E' position='absolute' fontWeight='extralight' left={{ base: '1.3rem', md: '10rem' }} bottom={{ base: '0.5rem', md: '1.2rem' }}>
          We use only Natural Solid Surface Materials
        </Text>
      </Flex>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4} mt={{ base: '1rem', md: '2rem' }} px='1rem' mb='1rem'>
        {vistaQuartzContent.map(({ header, body }, index) => (
          <GridItem key={index} p={8} bg='#CFDDE9'>
            <Text fontSize='24px' fontWeight='semibold' mb={3} color='#12222E'>
              {header}
            </Text>
            <Flex flexDir='column' gap='1rem'>
              {body.map((paragraph, idx) => (
                <Text key={idx} fontSize='16px' color='#132330' maxW='320px' fontWeight='light'>
                  {paragraph}
                </Text>
              ))}
            </Flex>
          </GridItem>
        ))}
      </Grid>

      <Flex px='1rem' flexDir='column' gap='1rem' mb='1rem'>
        <Flex bg='#F2F2F2' w='100%' h='fit-content' p='3rem'>
          <Text fontSize={{ base: '22px', md: '48px' }} fontWeight='extralight' maxW='600px' color='#132330'>
            {slabWallIntro.title}
          </Text>
        </Flex>

        <Flex bg='#12222E' w='100%' h='fit-content' p='5rem' flexDir='column' gap='2rem' pl='2.5rem'>
          {slabWallIntro.body.map((paragraph, index) => (
            <Text key={index} fontSize='16px' color='#FFFFFF' maxW='700px' fontWeight='extralight'>
              {paragraph}
            </Text>
          ))}
        </Flex>
      </Flex>

      <Flex w='100%' h='fit-content' flexDir='column' px='1rem' mb='1rem' gap='1rem'>
        <Grid w='100%' gap='1rem' templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
          <Flex h='500px' position='relative' overflowY='clip'>
            <ScrollRevealImage src={ImageNorimage} containerMaxHeight={524} />
          </Flex>

          {homeConsultationTop.map((consultation, index) => (
            <Flex key={index} flexDir='column' gap='1.3rem' p='4rem' color='#12222E' bg='#CFDDE9'>
              <Text fontSize='24px' fontWeight='semibold' maxW='300px'>
                {consultation.title}
              </Text>
              {consultation.body.map((paragraph, id) => (
                <Text key={id} fontSize='16px' maxW='250px'>
                  {paragraph}
                </Text>
              ))}
            </Flex>
          ))}
        </Grid>
        <Grid templateColumns={{ base: '1fr', md: '3fr 2fr' }} gap='1rem' w='100%' h='fit-content'>
          <Box bg='#4F70B5' p={{ base: '2rem', md: '4rem' }} color='#FFFFFF' display='flex' flexDirection='column' gap='2rem' maxW='100%'>
            <Text fontSize={{ base: '24px', md: '35px' }} maxW='380px'>
              {homeConsultationFinal.title}
            </Text>
            <Text fontSize='12px' fontWeight='light' maxW='220px'>
              {homeConsultationFinal.body}
            </Text>
          </Box>

          <ScrollRevealImage src={WomanImage} containerMaxHeight={584} />
        </Grid>
      </Flex>
    </>
  )
}

export default WhyNaturalSolidSurface
