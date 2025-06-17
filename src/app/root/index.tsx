import { AspectRatio, Box, Button, Flex, Grid, GridItem, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { useButtonAnimation } from 'core/hooks/useButtonAnimation'
import { Helmet } from 'react-helmet'
import { Link, NavLink } from 'react-router-dom'
import HeartIcon from 'shared/assets/icons/heart'
import HeroImage1 from 'shared/assets/images/heroImage1.jpg'
import HeroImage2 from 'shared/assets/images/heroImage2.jpg'
import Image1 from 'shared/assets/images/img231.avif'
import ShowerVideo from 'shared/assets/videos/showerVideo.mov'
import { ScrollRevealImage } from 'shared/components/scrollRevealImage'
import { CustomContainer } from 'shared/layouts/container'

const Root = () => {
  const bgImageHeightBreakpoints: any = useBreakpointValue({ base: 230, lg: 550, '2xl': 944 })
  const bgImageStreanthBreakpoints: any = useBreakpointValue({ base: 10, lg: 100 })

  const animatedButtonRef1 = useButtonAnimation()
  const animatedButtonRef2 = useButtonAnimation()

  const steps = [
    {
      id: 1,
      step: 'Step 1',
      title: (
        <>
          <Text as='span'>Design it yourself&nbsp;</Text>
          <Link to='/design' style={{ textDecoration: 'underline' }}>
            right now
          </Link>{' '}
          with just a few clicks.
        </>
      ),
      description: (
        <Flex flexDir='column' gap='0.5rem'>
          <Text>We’ll provide a written estimate — no in-home sales visit required!</Text>
          <Text>
            Our easy design tool lets you create the shower or bath of your dreams. Simply select the bathroom layout that most closely matches your space, and add the fixtures and accessories you
            love.
          </Text>
        </Flex>
      ),
    },
    {
      id: 2,
      step: 'Step 2',
      title: 'In-home Design Visit',
      description: (
        <>
          <Flex flexDir='column' gap='0.5rem'>
            <Text>You brew the coffee...We'll bring samples.</Text>
            <Text>
              You'll have questions about textures, sheens and finishes and we will have answers. Doing other bathroom projects like toilets, vanities or painting? Our designers can be super helpful
              with suggestions.
            </Text>
          </Flex>
        </>
      ),
    },
    {
      id: 3,
      step: 'Step 3',
      title: '3 Day Installation',
      description: 'Our experienced team of licensed plumbers, project managers and craftsmen are dedicated to delivering EXACTLY what was planned without disrupting your home for weeks or months!',
    },
  ]

  const infoSteps = [
    {
      id: 1,
      title: 'Tired of scrubbing grout?',
      description: 'Still dealing with grout in your bath or shower? Still living with constant cleaning, mold and bacteria that porous grout hides?',
    },
    {
      id: 2,
      title: 'Plastic Shower Walls?',
      description: 'Have you considered a "one day" plastic shower system but were concerned about the value of your home?',
      note: 'Ask your real estate agent if a plastic shower reno will add value to your home.',
    },
  ]

  const clientFeedback = [
    {
      id: 1,
      quote: 'Vista Quartz transformed my bathroom into a luxurious oasis. These walls are not only stunning but also incredibly easy to clean.',
      author: '- Sandra Thompson, Broomfield CO',
    },
    {
      id: 2,
      quote: 'The professionalism and communication were unexpected. The installers surpassed our expectations. Our bathroom is definitely elevated.',
      author: '- Will Donoho, Peyton CO',
    },
    {
      id: 3,
      quote: 'So glad we found this company before we went with a different product. Love having no grout and the quartz surface is so exactly what I wanted.',
      author: '- Emma & Jake Peterson, Littleton',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Vista Quartz Showers - Premium Quartz Bath & Shower Remodels</title>
        <meta name='description' content='Transform your bathroom into a stunning quartz retreat with our custom bath & shower remodels using natural stone and porcelain. Get a free quote today.' />
        <meta name='keywords' content='quartz showers, bath remodel, custom shower walls, natural stone, porcelain, bathroom renovation, quartz bath' />
      </Helmet>

      <AspectRatio w='100%' height='582px'>
        <Flex flexDir='column' position='relative' w='100%' h='full'>
          <video src={ShowerVideo} autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: '0', left: '0' }} />
          <Flex position='absolute' top={0} left={0} right={0} bottom={0} bg='rgb(133, 133, 133)' opacity='0.6' pointerEvents='none' />

          <CustomContainer w='100%' justifyContent='center' variant='containerLg' display='flex' flexDir='column' pos='relative' zIndex='10' gap='3rem'>
            <Flex flexDir='column' gap='1rem'>
              <Flex fontSize={{ base: '14px', md: '50px' }} color='#FFFFFF' flexDir='column' fontWeight='bold'>
                <Text>Natural Solid Surface</Text>
                <Text>Bath Remodels Installed</Text>
                <Text>in just a few days</Text>
              </Flex>

              <Flex>
                <NavLink to='/design'>
                  <Button ref={animatedButtonRef1} variant='secondary'>
                    DESIGN YOURS NOW
                  </Button>
                </NavLink>
              </Flex>
            </Flex>

            <Flex flexDir='column' maxW='580px' color='#FFFFFF' fontSize={{ base: '11px', md: '17px' }} gap={{ base: '0.5rem', md: '0.7rem' }} fontWeight='extralight'>
              <Text>NO Plastic Inserts, NO laminated or "cultured" panels</Text>
              <Text>The real natural solid surface you've always wanted...For the Price of the "One Day" Plastic Shower guys</Text>
            </Flex>
          </CustomContainer>
        </Flex>
      </AspectRatio>
      <Flex height={bgImageHeightBreakpoints} w='100%' position='relative'>
        <ScrollRevealImage src={HeroImage1} containerMaxHeight={bgImageHeightBreakpoints} strength={bgImageStreanthBreakpoints} />

        <Flex position='absolute' bottom='2rem' left={{ base: '0.5rem', md: '2rem' }}>
          <NavLink to='/design'>
            <Button ref={animatedButtonRef2} variant='secondary' px='6'>
              Try Our Easy Design & Price Tool
            </Button>
          </NavLink>
        </Flex>
      </Flex>

      <ScrollRevealImage src={HeroImage2} containerMaxHeight={bgImageHeightBreakpoints} strength={bgImageStreanthBreakpoints} />

      <Grid w='calc(100% - 2rem)' gap='1rem' my='1rem' mx='auto' templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
        {steps.map((step) => (
          <Flex key={step.id + 98452} flexDir='column' textAlign='center' bg='#CFDDE9' py='3rem' px='2rem'>
            <Text fontSize={{ base: '36px', md: '50px' }} color='#12222E' fontWeight='bold'>
              {step.step}
            </Text>
            <Box fontSize={{ base: '16px', md: '18px' }} color='#132330' fontWeight='medium' mb='1rem'>
              {step.title}
            </Box>
            <Box fontSize={{ base: '13px', md: '14px' }} color='#12222E' fontWeight='light'>
              {step.description}
            </Box>
          </Flex>
        ))}
      </Grid>

      <Flex
        w='100%'
        h='fit-content'
        flexDir={{ base: 'column', md: 'row' }}
        justifyContent='center'
        alignItems={{ base: 'center', md: 'unset' }}
        gap={{ base: '1rem', md: '5rem' }}
        bg='#2b475c'
        p='3rem'
      >
        {infoSteps.map((infoStep) => {
          return (
            <Flex flexDir='column' color='#FFFFFF' textAlign='center' gap='14px' key={infoStep.id + 76548}>
              <Text fontSize='22px' fontWeight='bold'>
                {infoStep.title}
              </Text>
              <Flex flexDir='column' gap='2rem' fontSize='17px' fontWeight='extralight' maxW='330px'>
                <Text>{infoStep.description}</Text>
                <Text>{infoStep?.note}</Text>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
      <CustomContainer variant='container' mx='auto'>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap='5rem' py='2rem'>
          <Flex flexDir='column' gap='2rem' mx='auto' justify='center' alignItems={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'unset' }} mt={{ base: '2rem', md: '0' }}>
            <Flex w='100%' flexDir='column' color='#858585' fontSize='32px' fontWeight='600' lineHeight='44px' gap='1rem'>
              <Text>Don't settle for plastic showers, laminated panels or other gimmicks</Text>
              <Text>Solid surface will last forever</Text>
            </Flex>
            <Text fontSize='15px' color='#12222E'>
              After inspecting thousands of bathrooms our founder realized that homeowners want showers with no grout that are easy to clean, antibacterial and feel like a beautiful place to start
              your day.
            </Text>
          </Flex>

          <Flex flexDir='column' gap='2rem' bg='#CFDDE9' p='3rem' flex='2' alignItems='center'>
            <Flex flexDir='column' fontSize={{ md: '20px', base: '14px' }} fontWeight='light' color='#12222E' gap='1rem'>
              <Text>We've all had enough of cleaning porous, moldy grout but what\'s the alternative? A "one day" plastic shower?</Text>
              <Text>
                There's too much plastic in our world today. Your shower should be an oasis of warmth, cleanliness and beauty. At Vista Quartz we bring you the classic elegance of tile without the
                problems of grout!
              </Text>
            </Flex>
            <Flex flexDir='row' gap='1rem' alignItems='center'>
              <HeartIcon style={{ flexShrink: 0 }} />
              <Text color='#000000' fontSize='18px' fontWeight='semibold' maxW='380px'>
                You love your solid surface kitchen counters...You'll love your new shower even more!
              </Text>
            </Flex>
          </Flex>
        </Grid>
      </CustomContainer>
      <Flex flexDir='column' w='100%' h='fit-content'>
        <Flex bg='#F2F2F2' fontSize={{ base: '20px', md: '43px' }} color='#132330' fontWeight='light' p='4rem' w='100%'>
          <Text>What Our Satisfied Clients Say...</Text>
        </Flex>

        <Flex flexDir={{ base: 'column', md: 'row' }} w='100%'>
          {clientFeedback.map((feedback) => {
            return (
              <Flex
                flex='1'
                h={{ base: 'unset', md: '500px' }}
                position='relative'
                key={feedback.id + 46548}
                bg={feedback.id === 1 ? 'transparent' : feedback.id === 2 ? '#CFDDE9' : '#4F70B5'}
                p='2rem'
              >
                <Flex w='100%' h='100%' pos='absolute' top='0' left='0'>
                  {feedback.id === 1 && <ScrollRevealImage src={Image1} strength={0} />}
                </Flex>
                <Flex pos='relative' zIndex='10' flexDir='column' gap='2rem' color={feedback.id === 1 ? '#FFFFFF' : feedback.id === 2 ? '#12222E' : '#FFFFFF'}>
                  <Text fontSize='20px' fontWeight='extralight' maxW='260px'>
                    {feedback.quote}
                  </Text>
                  <Text fontSize='13px' fontWeight='semibold'>
                    {feedback.author}
                  </Text>
                </Flex>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
    </>
  )
}

export default Root
