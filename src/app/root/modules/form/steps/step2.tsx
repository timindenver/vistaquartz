import { Flex, Text } from '@chakra-ui/react'
import { type Control, Controller, type FieldErrors } from 'react-hook-form'
import { CustomizedCheckbox } from 'shared/components/checkbox'

import type { FormFields } from '../'
import './styles.scss'

type Step2Props = {
  control: Control<FormFields, any>
  errors: FieldErrors<FormFields>
}

export const Step2 = ({ control, errors }: Step2Props) => {
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
            render={({
              field: {
                name: controllerName,
                value: controllerValue,
                onChange: controllerOnChange,
              },
            }) => {
              return (
                <Flex>
                  <CustomizedCheckbox
                    root={{
                      name: controllerName,
                      checked: controllerValue === 'text',
                      onCheckedChange: (event) => {
                        event.checked && controllerOnChange('text')
                      },
                      flex: 1,
                      size: 'lg',
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
                      flex: 1,
                      size: 'lg',
                    }}
                    label={{ value: 'Send email' }}
                    custom={{ shape: 'Square' }}
                  />
                </Flex>
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
            render={({
              field: {
                name: controllerName,
                value: controllerValue,
                onChange: controllerOnChange,
              },
            }) => {
              return (
                <Flex>
                  <CustomizedCheckbox
                    root={{
                      name: controllerName,
                      checked: controllerValue === 'owner',
                      onCheckedChange: (event) => {
                        event.checked && controllerOnChange('owner')
                      },
                      flex: 1,
                      size: 'lg',
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
                      flex: 1,
                      size: 'lg',
                    }}
                    label={{ value: 'No, I am not an owner' }}
                    custom={{ shape: 'Round' }}
                  />
                </Flex>
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
