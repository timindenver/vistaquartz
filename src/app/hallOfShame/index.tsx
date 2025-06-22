import { Flex, Image, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import GroutWallImage from 'shared/assets/images/groutWall.avif'
import LaminateImage from 'shared/assets/images/laminate.jpg'
import MarbleWallImage from 'shared/assets/images/marbleWall.jpg'
import PlasticShowerImage from 'shared/assets/images/plasticShower.png'
import ShowerPanImage2 from 'shared/assets/images/showerPan2.jpeg'
import ShowerPanImage3 from 'shared/assets/images/showerPan3.jpg'
import ShowerPanImage1 from 'shared/assets/images/showerPanImage1.jpg'
import StoneFloorImage2 from 'shared/assets/images/stoneFloor2.jpg'
import StoneFloorImage from 'shared/assets/images/stoneFloor.jpg'
import { CustomContainer } from 'shared/layouts/container'

const HallOfShame = () => {
  const culturedMarbleContent = {
    header: 'Cultured Marble Walls',
    body: [
      'Cultured marble showers are made by casting a concoction of polyester resin, catalytic agents, fillers and pigments in a mold to create panels, seam trims and shower accessories.',
      'Due to the heavy weight of these materials most installations require many seams, seams require sealants and sealants are prone to failure.',
    ],
    image: MarbleWallImage,
  }

  const fiberglassContent = {
    header: 'Fiberglass Tubs and Shower Pans',
    body: [
      'Your fiberglass shower pan or tub is prone to cracking, leaking and stains. Unfortunately, this is the most common type of tub or shower installed by production home builders.',
      'Due to the thin and brittle nature of fiberglass tubs and shower pans you will often notice that the materials "flexes" as you stand in the tub or shower. This is a sign of problems to come. Micro-cracking, drain seal failure and catastrophic cracks are all common issues with fiberglass bases. Avoid them if at all possible.',
    ],
    images: [ShowerPanImage1, ShowerPanImage2, ShowerPanImage3],
  }

  const tileAndGroutContent = {
    header: 'Tile & Grout Walls',
    body: [
      "Grout is porous. It's a cement-based product that hasn't changed much since its invention and it's about the worst material possible to have in a daily-use shower.",
      'Tile with grout looks nice when it is first installed but after a few years you begin to see the cracking, moisture retention, mold and mildew.',
    ],
    finalParagraph: (
      <>
        In 2021 a popular YouTube personality, "Tile Coach"{' '}
        <Text as='span' textDecorationLine='underline'>
          <NavLink color='blue.600' to='https://www.youtube.com/watch?v=g3TtkEkgefs' target='_blank'>
            tested the best and most popular grouts
          </NavLink>
        </Text>{' '}
        on the market today and found that even after careful installation and adherence to manufacturer's standards, grout was easily rubbed out of its grooves by even gentle abrasion with a piece of
        plastic.
      </>
    ),
    image: GroutWallImage,
  }

  const showerFloorInfo = {
    header: 'Mortar & Stone Shower Floors',
    body: [
      'They looks so nice at the resorts, right?',
      "In theory, building a custom shower pan using mortar and aggregates like stone, river rock or even tiles can be done but it is extremely difficult to get it right and even more difficult to maintain once you've purchased it.",
      'The unfortunate reality is that quality craftsmanship, adherence to product guidelines and pride of workmanship has deteriorated among trade professionals. Too many contractors disregard critical product installation instructions, industry standards and best practices. These habits lead to failures.',
      'The photo on the right is a failed shower pan installed in a 5 year old primary bath. The home was built by one of the largest production builders in Colorado and was well out of its one year warranty by the time the homeowner realized that this shower pan was essentially a constant "mold sandwich" that would not allow water to egress to the shower drain.',
      'Photo below is a shower pan that was leaking through to the kitchen island below.',
    ],
    image: StoneFloorImage,
  }

  const oneDayPlasticShowersContent = {
    header: 'One-Day Plastic Showers',
    body: [
      'You\'ve seen all the adds on social media. "Transform your bath in one day!"',
      "The good news is there's no grout.",
      'The bad news is that these are plastic walls and you will pay $15,000-$18,000 for these plastic-walled showers.',
    ],
    image: PlasticShowerImage,
  }

  const laminatedPanelsContent = {
    header: 'Laminated Panels',
    body: [
      'Lamination is the process of bonding layers of materials together using adhesives.',
      'Typically you\'ll have a thin top layer coating that is waterproof over a "lamella" or photo image of the design. All this is bonded to several other layers of different materials to create a large panel.',
      'These layers are susceptible to dis-bonding due to the humidity and temperatures changes in a shower environment.',
      "Most home builders won't install laminated flooring in bathrooms. Would you really trust it on the walls of your shower?",
    ],
    image: LaminateImage,
  }

  return (
    <>
      <Helmet>
        <title>Hall of Shame - Vista Quartz Showers</title>
        <meta name='description' content='Browse real-world bath and shower projects that faced issues you can avoid costly mistakes in your remodel.' />
        <meta name='keywords' content='bathroom remodel mistakes, shower failure examples, waterproofing issues, mold problems, contractor errors' />
      </Helmet>

      <CustomContainer variant='container' mx='auto'>
        <Flex w='full' h='fit-content' flexDir={{ base: 'column', md: 'row' }}>
          <Flex w={{ base: '100%', md: '673px' }} h={{ base: '300px', md: '660px' }}>
            <Image src={culturedMarbleContent.image} w='full' h='full' objectFit='cover' />
          </Flex>
          <Flex flexDir='column' gap={{ md: '2rem', base: '1.2rem' }} p='2rem' pt={{ base: '1rem' }}>
            <Text fontSize={{ md: '43px', base: '30px' }} color='#12222E' fontWeight='light'>
              {culturedMarbleContent.header}
            </Text>
            {culturedMarbleContent.body.map((section, idx) => (
              <Text key={idx} color='#12222E' fontSize='20px' fontWeight='light' maxW='358px'>
                {section}
              </Text>
            ))}
          </Flex>
        </Flex>
      </CustomContainer>

      <CustomContainer variant='containerXS' mx='auto' mt={{ md: '4rem', base: '1rem' }} display='flex' flexDir='column' gap='1rem'>
        <Flex flexDir={{ base: 'column', md: 'row' }} gap={{ base: '1rem', md: '4rem' }}>
          <Flex flexDir='column' gap={{ md: '2rem' }}>
            <Flex flexDir='column' gap={{ base: '1.2rem', md: '0' }} p='4rem' pt={{ base: '1rem' }} px={{ base: '2rem' }}>
              <Text fontSize={{ md: '43px', base: '30px' }} color='#12222E' fontWeight='light' maxW='400px'>
                {fiberglassContent.header}
              </Text>
              <Text color='#12222E' fontSize='20px' fontWeight='light' maxW='358px'>
                {fiberglassContent.body[0]}
              </Text>
            </Flex>
            <Flex w={{ base: '100%', md: '546px' }} h={{ base: '300px', md: '522px' }}>
              <Image src={fiberglassContent.images[1]} w='100%' h='full' objectFit='cover' />
            </Flex>
          </Flex>

          <Flex flexDir='column' gap={{ md: '2rem', base: '0' }}>
            <Flex w={{ base: '100%', md: '450px' }} h={{ base: '300px', md: '460px' }}>
              <Image src={fiberglassContent.images[0]} w='100%' h='full' objectFit='cover' />
            </Flex>
            <Flex flexDir='column' p='4rem' pt={{ base: '3rem' }} px={{ base: '2rem' }}>
              <Text color='#12222E' fontSize='20px' fontWeight='light' maxW='458px'>
                {fiberglassContent.body[1]}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex w='full' justifyContent={{ base: 'center', md: 'flex-end' }} pr={{ base: '0', md: '5rem' }}>
          <Flex w={{ base: '100%', md: '600px' }} h={{ base: '300px', md: '450px' }}>
            <Image src={fiberglassContent.images[2]} w='full' h='full' objectFit='cover' />
          </Flex>
        </Flex>
      </CustomContainer>

      <CustomContainer variant='container' mx='auto' mt={{ md: '4rem', base: '1rem' }} display='flex' flexDir='column' gap={{ md: '6rem', base: '2rem' }}>
        <Flex flexDir='column'>
          <Flex flexDir='row' w='100%' h='60px'>
            <Flex w='70%' bg='#F2F2F2' />
            <Flex w='30%' bg='#EB4509' />
          </Flex>

          <Flex flexDir={{ base: 'column', md: 'row' }} w='full' gap={{ md: '2rem', base: '0' }}>
            <Flex w={{ base: '100%', md: '1423px' }} h={{ base: '300px', md: '823px' }} ml='auto' flex='1'>
              <Image src={tileAndGroutContent.image} w='100%' h='full' objectFit='cover' />
            </Flex>

            <Flex flexDir='column' gap={{ md: '2rem', base: '1.2rem' }} pt='2rem'>
              <Text fontSize={{ md: '43px', base: '30px' }} color='#12222E' fontWeight='light' maxW='490px'>
                {tileAndGroutContent.header}
              </Text>
              {tileAndGroutContent.body.map((paragraph, idx) => (
                <Text key={idx} color='#12222E' fontSize='20px' fontWeight='light' maxW='304px'>
                  {paragraph}
                </Text>
              ))}
              <Text color='#12222E' fontSize='20px' fontWeight='light' maxW='338px'>
                {tileAndGroutContent.finalParagraph}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </CustomContainer>

      <CustomContainer variant='containerXS' mx='auto' mt={{ md: '6rem', base: '2rem' }} display='flex' flexDir='column' gap={{ md: '8rem', base: '2rem' }} mb={{ md: '4rem', base: '2rem' }}>
        <Flex flexDir={{ base: 'column', md: 'row' }} gap={{ base: '2rem' }} w='full'>
          <Flex flexDir='column' gap={{ md: '2rem', base: '1.2rem' }} pt={{ md: '2rem' }}>
            <Text fontSize={{ md: '43px', base: '30px' }} color='#12222E' fontWeight='light' maxW='490px'>
              {showerFloorInfo.header}
            </Text>
            {showerFloorInfo.body.map((paragraph, id) => (
              <Text key={id} color='#12222E' fontSize='20px' fontWeight='light' maxW='458px'>
                {paragraph}
              </Text>
            ))}
          </Flex>

          <Flex w={{ base: '100%', md: '600px' }} h={{ base: '300px', md: '1000px' }} ml='auto' flex='1' border='5px solid #2B475C'>
            <Image src={showerFloorInfo.image} w='100%' h='full' objectFit='cover' />
          </Flex>
        </Flex>

        <Flex w={{ base: '100%', md: '500px' }} h={{ base: '300px', md: '400px' }} ml='left'>
          <Image src={StoneFloorImage2} w='100%' h='full' objectFit='cover' />
        </Flex>
      </CustomContainer>

      <CustomContainer variant='containerXS' mx='auto' mb={{ md: '10rem' }}>
        <Flex flexDir={{ base: 'column', md: 'row' }} w='full' gap={{ base: '2rem' }}>
          <Flex flexDir='column' gap={{ md: '2rem', base: '1.2rem' }} pt='2rem'>
            <Text fontSize={{ md: '43px', base: '30px' }} color='#12222E' fontWeight='light' maxW='400px'>
              {oneDayPlasticShowersContent.header}
            </Text>
            {oneDayPlasticShowersContent.body.map((paragraph, id) => (
              <Text key={id} color='#12222E' fontSize='20px' fontWeight='light' maxW='350px'>
                {paragraph}
              </Text>
            ))}
          </Flex>

          <Flex w={{ base: '100%', md: '450px' }} h={{ base: '300px', md: '600px' }} ml='auto'>
            <Image src={oneDayPlasticShowersContent.image} w='100%' h='full' objectFit='cover' />
          </Flex>
        </Flex>
      </CustomContainer>

      <CustomContainer variant='container' mx='auto' mt='1rem' display='flex' flexDir='column' gap='2rem' mb='4rem'>
        <Flex flexDir='column'>
          <Flex flexDir='row' w='100%' h='60px'>
            <Flex w='70%' bg='#F2F2F2' />
            <Flex w='30%' bg='#4C6D87' />
          </Flex>

          <Flex flexDir={{ base: 'column', md: 'row' }} w='full' gap={{ md: '2rem' }}>
            <Flex w={{ base: '100%', md: '600px' }} h={{ base: '300px', md: '600px' }} ml='auto' flex='1'>
              <Image src={laminatedPanelsContent.image} w='100%' h='full' objectFit='cover' />
            </Flex>

            <Flex flexDir='column' gap={{ md: '2rem', base: '1.2rem' }} pt='2rem'>
              <Text fontSize={{ md: '43px', base: '30px' }} color='#12222E' fontWeight='light' maxW='490px'>
                {laminatedPanelsContent.header}
              </Text>
              {laminatedPanelsContent.body.map((paragraph, idx) => (
                <Text key={idx} color='#12222E' fontSize='20px' fontWeight='light' maxW='410px'>
                  {paragraph}
                </Text>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </CustomContainer>
    </>
  )
}

export default HallOfShame
