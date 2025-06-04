import { useState } from 'react'

import { Flex } from '@chakra-ui/react'
import { SubmitFormProvider } from 'core/context/form'
import { SelectionPreloaderProvider } from 'core/context/selectionPreloader'
import { ConfiguratorLayout } from 'shared/layouts/configuratorLayout'

import { Form } from './modules/form'
import { LayoutSelection } from './modules/layoutSelection'
import { MainSelection } from './modules/mainSelection'

export default function Root() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <SelectionPreloaderProvider>
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
