import { Flex, Text } from '@chakra-ui/react'
import { type Control, Controller, type FieldErrors } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import { CustomizedInput } from 'shared/components/input'

import type { FormFields } from '../'

type Step1Props = {
  control: Control<FormFields, any>
  errors: FieldErrors<FormFields>
}

export const Step1 = ({ control, errors }: Step1Props) => {
  return (
    <Flex w='100%' flexDir='column' gap='md'>
      <Text textStyle='subheader' color='blue.dark'>
        Location where the work will be done
      </Text>
      <Flex flexDir='column' gap='20px'>
        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='1.city'
            rules={{
              required: {
                value: true,
                message: 'Please enter your city',
              },
            }}
            render={({
              field: {
                name: controllerName,
                value: controllerValue,
                onChange: controllerOnChange,
              },
            }) => {
              const haveError = errors?.[1]?.city

              return (
                <CustomizedInput
                  name={controllerName}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  placeholder='City'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={
                    haveError
                      ? 'var(--chakra-colors-error)'
                      : 'focus-ring-color'
                  }
                />
              )
            }}
          />
          {errors?.[1]?.city && (
            <Text fontSize='13px' color='error'>
              {errors?.[1]?.city?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='1.street'
            rules={{
              required: {
                value: true,
                message: 'Please enter your street',
              },
            }}
            render={({
              field: {
                name: controllerName,
                value: controllerValue,
                onChange: controllerOnChange,
              },
            }) => {
              const haveError = errors?.[1]?.street

              return (
                <CustomizedInput
                  name={controllerName}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  placeholder='Street'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={
                    haveError
                      ? 'var(--chakra-colors-error)'
                      : 'focus-ring-color'
                  }
                />
              )
            }}
          />
          {errors?.[1]?.street && (
            <Text fontSize='13px' color='error'>
              {errors?.[1]?.street?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='1.state'
            rules={{
              required: {
                value: true,
                message: 'Please enter your state',
              },
            }}
            render={({
              field: {
                name: controllerName,
                value: controllerValue,
                onChange: controllerOnChange,
              },
            }) => {
              const haveError = errors?.[1]?.state

              return (
                <CustomizedInput
                  name={controllerName}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  placeholder='State'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={
                    haveError
                      ? 'var(--chakra-colors-error)'
                      : 'focus-ring-color'
                  }
                />
              )
            }}
          />
          {errors?.[1]?.state && (
            <Text fontSize='13px' color='error'>
              {errors?.[1]?.state?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='1.zip'
            rules={{
              required: {
                value: true,
                message: 'Please enter your state',
              },
            }}
            render={({
              field: {
                name: controllerName,
                value: controllerValue,
                onChange: controllerOnChange,
              },
            }) => {
              const haveError = errors?.[1]?.zip

              return (
                <CustomizedInput
                  name={controllerName}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  placeholder='ZIP'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={
                    haveError
                      ? 'var(--chakra-colors-error)'
                      : 'focus-ring-color'
                  }
                />
              )
            }}
          />
          {errors?.[1]?.zip && (
            <Text fontSize='13px' color='error'>
              {errors?.[1]?.zip?.message}
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
