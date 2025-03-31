import { Flex, Text } from '@chakra-ui/react'
import type { FormFields } from 'core/context/form'
import { Controller, useFormContext } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { CustomizedInput } from 'shared/components/input'

import './styles.scss'

export const Step0 = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormFields>()

  return (
    <Flex w='100%' flexDir='column' gap='md'>
      <Text textStyle='subheader' color='blue.dark'>
        Contact info
      </Text>
      <Flex flexDir='column' gap='20px'>
        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='0.firstName'
            rules={{
              required: {
                value: true,
                message: 'Please enter your first name',
              },
            }}
            render={({ field: { name: controllerName, ref: controllerRef, value: controllerValue, onChange: controllerOnChange, onBlur: controllerOnBlur } }) => {
              const haveError = errors?.[0]?.firstName

              return (
                <CustomizedInput
                  name={controllerName}
                  ref={controllerRef}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  onBlur={controllerOnBlur}
                  placeholder='First Name'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={haveError ? 'var(--chakra-colors-error)' : 'focus-ring-color'}
                />
              )
            }}
          />
          {errors?.[0]?.firstName && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.firstName?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='0.lastName'
            rules={{
              required: { value: true, message: 'Please enter your last name' },
            }}
            render={({ field: { name: controllerName, ref: controllerRef, value: controllerValue, onChange: controllerOnChange, onBlur: controllerOnBlur } }) => {
              const haveError = errors?.[0]?.lastName

              return (
                <CustomizedInput
                  name={controllerName}
                  ref={controllerRef}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  onBlur={controllerOnBlur}
                  placeholder='Last Name'
                  borderColor={haveError ? 'error' : 'transparent'}
                  outline={haveError ? 'var(--chakra-colors-error)' : 'focus-ring-color'}
                />
              )
            }}
          />
          {errors?.[0]?.lastName && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.lastName?.message}
            </Text>
          )}
        </Flex>

        <Flex flexDir='column' gap='5px'>
          <Controller
            control={control}
            name='0.phone'
            rules={{
              required: {
                value: true,
                message: 'Please enter your phone number',
              },
            }}
            render={({ field: { name: controllerName, ref: controllerRef, value: controllerValue, onChange: controllerOnChange, onBlur: controllerOnBlur } }) => {
              const haveError = errors?.[0]?.phone

              return (
                <PhoneInput
                  name={controllerName}
                  ref={controllerRef}
                  value={controllerValue}
                  onChange={controllerOnChange}
                  onBlur={controllerOnBlur}
                  className={haveError ? 'PhoneInputError' : ''}
                  placeholder='Enter phone number'
                  international={false}
                  defaultCountry='US'
                />
              )
            }}
          />
          {errors?.[0]?.phone && (
            <Text fontSize='13px' color='error'>
              {errors?.[0]?.phone?.message}
            </Text>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
