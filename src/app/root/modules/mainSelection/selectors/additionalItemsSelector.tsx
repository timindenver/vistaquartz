import type { Dispatch, SetStateAction } from 'react'

import { Flex, Image } from '@chakra-ui/react'
import { Checkbox } from 'components/ui/checkbox'

import type {
  DefaultAdditionalOptionValues,
  DefaultAdditionalOptions,
} from '../details'
import css from '../styles.module.scss'

type AdditionalItemsSelectorProps = {
  additionalOptions: DefaultAdditionalOptions
  selectedAdditionalItems: {
    open: boolean
    items: DefaultAdditionalOptionValues[]
  }
  setSelectedAdditionalItems: Dispatch<
    SetStateAction<{
      open: boolean
      items: DefaultAdditionalOptionValues[]
    }>
  >
  isMobile: boolean | undefined
}

export const AdditionalItemsSelector = ({
  additionalOptions,
  selectedAdditionalItems,
  setSelectedAdditionalItems,
  isMobile,
}: AdditionalItemsSelectorProps) => {
  return (
    <Flex flexDir='column' gap={{ base: 'unset', xl: 'md' }}>
      {additionalOptions?.map((option) => {
        return (
          <Flex
            key={option?.value + 79875}
            w='100%'
            alignItems='center'
            justifyContent='space-between'
            gap='md'
            py={{ base: 'md', xl: 'unset' }}
          >
            <Flex alignItems='center' gap='md'>
              <Checkbox
                size='lg'
                color='blue.dark'
                className={css.checkbox}
                checked={selectedAdditionalItems?.items?.includes(
                  option?.value
                )}
                onChange={() => {
                  const newItems = selectedAdditionalItems.items?.includes(
                    option?.value
                  )
                    ? selectedAdditionalItems.items.filter(
                        (item) => item !== option?.value
                      )
                    : [...(selectedAdditionalItems.items || []), option?.value]
                  setSelectedAdditionalItems((prev) => ({
                    ...prev,
                    items: newItems,
                  }))
                }}
              >
                {isMobile ? option?.title?.mobile : option?.title?.desktop}
              </Checkbox>
            </Flex>
            <Flex
              alignItems='center'
              gap={{
                base: option?.images?.gap?.mobile + 'px',
                xl: option?.images?.gap?.desktop + 'px',
              }}
            >
              {option?.images?.src?.map((img) => {
                return (
                  <Image
                    maxW={{
                      base: option?.images?.maxWidth?.mobile + 'px',
                      xl: option?.images?.maxWidth?.desktop + 'px',
                    }}
                    src={img}
                    key={img + 33253}
                  />
                )
              })}
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}
