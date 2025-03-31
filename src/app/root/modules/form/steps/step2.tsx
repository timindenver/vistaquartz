import { Flex, Grid, Text } from '@chakra-ui/react'
import type { FormFields } from 'core/context/form'
import { Controller, useFormContext } from 'react-hook-form'
import { CustomizedCheckbox } from 'shared/components/checkbox'

import './styles.scss'

export const Step2 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormFields>()

  return (
    <Flex flexDir='column' gap='40px'>
      <Flex flexDir='column' gap='20px'>
        <Text textStyle='subheader' color='blue.dark'>
          How would you prefer to receive your estimate?
        </Text>
        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='2.estimateReceiveMethod'
            rules={{
              required: {
                value: true,
                message: 'Please enter your prefered method',
              },
            }}
            render={({ field: { name: controllerName, value: controllerValue, onChange: controllerOnChange } }) => {
              return (
                <Grid gridTemplateColumns='repeat(2, 1fr)'>
                  <CustomizedCheckbox
                    root={{
                      name: controllerName,
                      checked: controllerValue === 'text',
                      onCheckedChange: (event) => {
                        event.checked && controllerOnChange('text')
                      },
                      w: 'fit-content',
                      size: 'lg',
                      cursor: 'pointer',
                    }}
                    label={{ value: 'Send text' }}
                    custom={{ shape: 'Square' }}
                  />

                  <CustomizedCheckbox
                    root={{
                      name: controllerName,
                      checked: controllerValue === 'email',
                      onCheckedChange: (event) => {
                        event.checked && controllerOnChange('email')
                      },
                      w: 'fit-content',
                      size: 'lg',
                      cursor: 'pointer',
                    }}
                    label={{ value: 'Send email' }}
                    custom={{ shape: 'Square' }}
                  />
                </Grid>
              )
            }}
          />
          {errors?.[2]?.estimateReceiveMethod && (
            <Text fontSize='13px' color='error'>
              {errors?.[2]?.estimateReceiveMethod?.message}
            </Text>
          )}
        </Flex>
      </Flex>

      <Flex flexDir='column' gap='20px'>
        <Text textStyle='subheader' color='blue.dark'>
          Please confirm you are the property owner
        </Text>
        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='2.confirmation'
            rules={{
              required: {
                value: true,
                message: 'Please confirm that you are the owner',
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
          {errors?.[2]?.confirmation && (
            <Text fontSize='13px' color='error'>
              {errors?.[2]?.confirmation?.message}
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
