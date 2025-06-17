import { Flex, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import { CustomContainer } from 'shared/layouts/container'

const faqs = [
  {
    question: 'What type of shower bases are available?',
    answer: (
      <>
        We only use solid surface shower bases without grout or mortar. Why? In our experience, tile shower pans will always fail at some point leading to bacteria, mold or leak issues. See our{' '}
        <Text as='span' textDecoration='underline'>
          <NavLink to='/hall-of-shame'>Hall of Shame</NavLink>
        </Text>{' '}
        page for more info.
      </>
    ),
  },
  {
    question: 'Are there more wall designs to choose from?',
    answer:
      'Yes. If you don’t see a wall design that you love in our Design Tool, we have other options available. Please schedule an in-home design consult or a virtual design consult by calling us at 720.807.3626.',
  },
  {
    question: 'Can the shower walls go from floor to ceiling?',
    answer: 'Yes. In most cases we can have the walls extend up to the ceiling provided there is enough room in the home to maneuver the panels safely during installation.',
  },
  {
    question: 'What material are the walls made of?',
    answer:
      'We only use natural solid surface walls to include quartz, porcelain and other ultra-compact solid surface wall panels. We DO NOT use laminated panels or plastic wall panels of any kind.',
  },
  {
    question: 'What is included in the project?',
    answer: 'All demolition, plumbing, installation and haul-away of old materials is included in the project.',
  },
  {
    question: 'Project Duration',
    answer: 'Most bath or shower remodel projects are completed in 3-4 days. There may be an additional day of "set time" to allow for components to "cure" prior to using your new shower.',
  },
  {
    question: 'Are you insured?',
    answer: 'Yes. We are fully bonded and insured to provide our clients with the protection they need while having workers in their homes.',
  },
  {
    question: 'Who will be doing the plumbing work?',
    answer:
      'All plumbing and drain connections are completed by a licensed Master plumber with 20+ years of experience. All plumbing and drain connections are tested prior to moving on to the next step in the installation process.',
  },
]

const FAQ = () => {
  return (
    <CustomContainer variant='containerXS' mx='auto' mt='2rem' display='flex' flexDir='column' gap='2rem' mb='2rem'>
      <Helmet>
        <title>FAQ - Vista Quartz Showers</title>
        <meta name='description' content='Have questions about our quartz bath and shower remodels? Find answers about our services, timelines, costs, licensing and more.' />
        <meta name='keywords' content='quartz shower FAQ, bath remodel questions, project timelines, remodel costs, licensed contractor' />
      </Helmet>

      <Flex flexDir='column' gap='1.7rem' color='#000000'>
        <Text fontSize='40px' fontWeight='light'>
          Frequently Asked Questions
        </Text>

        {faqs.map((faq, idx) => (
          <Flex key={idx} flexDir='column' gap='0.7rem' maxW='1000px'>
            <Text fontSize='20px' fontWeight='medium'>
              {faq.question}
            </Text>
            <Text fontSize='14px'>{faq.answer}</Text>
          </Flex>
        ))}
      </Flex>
    </CustomContainer>
  )
}

export default FAQ
