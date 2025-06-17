import { useState } from 'react'

import { Flex } from '@chakra-ui/react'
import { SubmitFormProvider } from 'core/context/form'
import { SelectionPreloaderProvider } from 'core/context/selectionPreloader'
import { Helmet } from 'react-helmet'
import { ConfiguratorLayout } from 'shared/layouts/configuratorLayout'

import { Form } from './modules/form'
import { LayoutSelection } from './modules/layoutSelection'
import { MainSelection } from './modules/mainSelection'

export default function Root() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <SelectionPreloaderProvider>
      <Helmet>
        <title>Design - Vista Quartz Showers</title>
        <meta name='description' content='Explore our quartz and porcelain bath & shower design gallery for inspiration. See beautiful styles, color palettes, and layout ideas for your space.' />
        <meta name='keywords' content='bathroom design inspiration, quartz shower gallery, porcelain shower designs, remodel ideas, color palettes' />
      </Helmet>

      <SubmitFormProvider>
        <ConfiguratorLayout activeStep={activeStep}>
          <Flex w='100%' h='100%' minH='fit-content' justifyContent='center' flexDir='column'>
            {activeStep === 0 && <LayoutSelection setActiveStep={setActiveStep} />}
            {activeStep === 1 && <MainSelection setActiveStep={setActiveStep} />}
            {activeStep === 2 && <Form setActiveStep={setActiveStep} />}
          </Flex>
        </ConfiguratorLayout>
      </SubmitFormProvider>
    </SelectionPreloaderProvider>
  )
}
