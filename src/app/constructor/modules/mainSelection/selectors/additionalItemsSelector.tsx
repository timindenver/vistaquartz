import { Flex, Image } from '@chakra-ui/react'
import { Checkbox } from 'components/ui/checkbox'
import { useSelection } from 'core/context/selection'

import type { DefaultAdditionalOptions } from '../details'
import css from '../styles.module.scss'

type AdditionalItemsSelectorProps = {
  additionalOptions: DefaultAdditionalOptions
  isMobile: boolean | undefined
}

export const AdditionalItemsSelector = ({ additionalOptions, isMobile }: AdditionalItemsSelectorProps) => {
  const selection = useSelection()
  const selectedAdditionalItems = selection.selectionData.additionalItems

  return (
    <Flex flexDir='column' gap={{ base: 'unset', xl: 'md' }}>
      {additionalOptions?.map((option) => {
        return (
          <Flex key={option?.value + 79875} w='100%' alignItems='center' justifyContent='space-between' gap='md' py={{ base: 'md', xl: 'unset' }}>
            <Flex alignItems='center' gap='md'>
              <Checkbox
                size='lg'
                color='blue.dark'
                className={css.checkbox}
                checked={selectedAdditionalItems?.includes(option?.value)}
                cursor='pointer'
                onChange={() => {
                  const newItems = selectedAdditionalItems?.includes(option?.value)
                    ? selectedAdditionalItems.filter((item) => item !== option?.value)
                    : [...(selectedAdditionalItems || []), option?.value]

                  selection.setSelectionData((prev) => ({
                    ...prev,
                    additionalItems: newItems,
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
