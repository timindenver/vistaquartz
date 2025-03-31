import { Flex, Image, Text } from '@chakra-ui/react'
import { Checkbox } from 'components/ui/checkbox'
import { useSelection } from 'core/context/selection'

import type { DefaultFixtureOption } from '../details'
import css from '../styles.module.scss'

type FixturesSelectorProps = {
  fixtureOptions: DefaultFixtureOption[]
}

export const FixturesSelector = ({ fixtureOptions }: FixturesSelectorProps) => {
  const selection = useSelection()
  const selectedFixtureOption = selection.selectionData.fixtureOption

  return (
    <Flex w='100%' flexDir='column' gap='md'>
      <Flex
        w='100%'
        h={{ base: 'fit-content', xl: '34px' }}
        gap='1px'
        overflowX={{ base: 'hidden', xl: 'auto' }}
        display={{ base: 'grid', xl: 'flex' }}
        gridTemplateColumns={{ base: '1fr 1fr', xl: 'unset' }}
      >
        {fixtureOptions?.map((fixtureOption) => {
          const isSelected = selectedFixtureOption.color === fixtureOption?.value

          return (
            <Flex
              key={fixtureOption?.value + 44242}
              w={{ base: '100%', xl: 'fit-content' }}
              h='100%'
              bg={isSelected ? 'blue.medium' : 'blue.light'}
              py='9px'
              px='sm'
              gap='4px'
              transition='.2s'
              cursor='pointer'
              onClick={() => {
                selection.setSelectionData((prev) => ({
                  ...prev,
                  fixtureOption: {
                    ...prev.fixtureOption,
                    color: fixtureOption?.value,
                  },
                }))
              }}
            >
              <Flex w='16px' h='16px' borderRadius='50%' bg={fixtureOption?.hex}></Flex>
              <Text textStyle='description' color='blue.dark' whiteSpace='nowrap'>
                {fixtureOption?.name}
              </Text>
            </Flex>
          )
        })}
      </Flex>
      <Flex w='100%' flexDir='column' gap='sm'>
        {fixtureOptions
          ?.find((option) => option?.value === selectedFixtureOption.color)
          ?.options?.map((option) => {
            return (
              <Flex key={option?.value + 43548} w='100%' alignItems='center' justifyContent='space-between' gap='md'>
                <Flex alignItems='center' gap='md'>
                  <Checkbox
                    size='lg'
                    color='blue.dark'
                    className={css.checkbox}
                    cursor='pointer'
                    checked={selectedFixtureOption.items[option.value]}
                    onChange={() => {
                      selection.setSelectionData((prev) => ({
                        ...prev,
                        fixtureOption: {
                          ...prev.fixtureOption,
                          items: {
                            ...prev.fixtureOption.items,
                            [option.value]: !prev.fixtureOption.items[option.value],
                          },
                        },
                      }))
                    }}
                  >
                    <Text textStyle='subheader'>{option?.title}</Text>
                  </Checkbox>
                </Flex>
                <Image maxW={{ base: '90px', xl: '100px' }} src={option?.image} />
              </Flex>
            )
          })}
      </Flex>
    </Flex>
  )
}
