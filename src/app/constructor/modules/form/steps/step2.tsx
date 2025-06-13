import { Flex, Grid, Text } from '@chakra-ui/react'
import type { FormFields } from 'core/context/form'
import { Controller, useFormContext } from 'react-hook-form'
import { CustomizedCheckbox } from 'shared/components/checkbox'

import './styles.scss'

export const Step2 = () => {
  const {
    control,
    getValues,
    formState: { errors },
  } = useFormContext<FormFields>()

  return (
    <Flex flexDir='column' gap='40px'>
      <Flex flexDir='column' gap='20px'>
        <Text textStyle='subheader' color='blue.dark'>
          Please confirm you are the property owner
        </Text>
        <Flex flexDir='column' gap='12px'>
          <Controller
            control={control}
            name='2.confirmation'
            rules={{
              required: {
                value: true,
                message:
                  'Please confirm that you are the property OWNER. <br /> (Due to privacy laws we are only allowed to provide estimates for property improvement to a person on the title of the property)',
              },
            }}
            render={({ field: { name: controllerName, value: controllerValue, onChange: controllerOnChange } }) => {
              return (
                <Grid gridTemplateColumns='repeat(2, 1fr)'>
                  <CustomizedCheckbox
                    root={{
                      name: controllerName,
                      checked: controllerValue === 'owner',
                      onCheckedChange: (event) => {
                        event.checked && controllerOnChange('owner')
                      },
                      w: 'fit-content',
                      size: 'lg',
                      cursor: 'pointer',
                    }}
                    label={{ value: 'Yes, I am owner' }}
                    custom={{ shape: 'Round' }}
                  />

                  <CustomizedCheckbox
                    root={{
                      name: controllerName,
                      checked: controllerValue === 'non-owner',
                      onCheckedChange: (event) => {
                        event.checked && controllerOnChange('non-owner')
                      },
                      w: 'fit-content',
                      size: 'lg',
                      cursor: 'pointer',
                    }}
                    label={{ value: 'No, I am not an owner' }}
                    custom={{ shape: 'Round' }}
                  />
                </Grid>
              )
            }}
          />
          <Text fontSize='13px' color='error'>
            Please confirm that you are the property OWNER. <br /> (Due to privacy laws we are only allowed to provide estimates for property improvement to a person on the title of the property)
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
