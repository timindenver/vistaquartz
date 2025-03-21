import { type Dispatch, type SetStateAction, useState } from 'react'

import { Flex, Image, Text } from '@chakra-ui/react'
import { useSelection } from 'core/context/selection'
import { type SelectiveAssetsType, useImagePreloader } from 'core/hooks/image'
import ArrowLeftIcon from 'shared/assets/icons/arrowLeft'

import { LAYOUT_DETAILS, type LAYOUT_DETAIL_TYPE } from './details'

type LayoutSelectionProps = {
  setActiveStep: Dispatch<SetStateAction<number>>
}

export const LayoutSelection = ({ setActiveStep }: LayoutSelectionProps) => {
  const selection = useSelection()
  const imagePreloader = useImagePreloader()

  const [activeSelection, setActiveSelection] = useState(0)

  const handleGoBack = () => {
    if (activeSelection > 0) {
      setActiveSelection((prev) => prev - 1)
    } else {
      setActiveStep((prev) => prev - 1)
    }
  }

  const handleSelect = ({
    currentSelection,
    activeOption,
  }: {
    currentSelection: LAYOUT_DETAIL_TYPE['selection']
    activeOption: LAYOUT_DETAIL_TYPE['selection']['options'][0]['options'][0]
  }) => {
    selection?.setSelectionDetails((prev) => ({
      ...prev,
      [currentSelection?.name]: activeOption?.value,
    }))
    setActiveSelection((prev) => prev + 1)
    if (activeSelection === 1) {
      setActiveStep((prev) => prev + 1)
    }

    let preloadType: keyof SelectiveAssetsType | 'all' = 'all'
    switch (activeOption?.value) {
      case 'showerStall': {
        preloadType = 'californiaSystem'
        break
      }
      case 'alcoveShower': {
        preloadType = 'alcoveShower'
        break
      }
      case 'tubShowerCombo': {
        preloadType = 'alcoveTub'
        break
      }
    }

    imagePreloader.selectivePreload({
      name: preloadType,
      type: 'first',
      then: 'continue',
    })
  }

  return (
    <Flex
      w='100%'
      h='100%'
      minH='fit-content'
      flexDir='column'
      px='md'
      py='32px'
    >
      {activeSelection > 0 && (
        <Flex
          alignItems='center'
          gap='8px'
          marginBottom='19px'
          onClick={handleGoBack}
          pos='absolute'
          top='32px'
          left='32px'
          display={{ base: 'none', xl: 'flex' }}
          cursor='pointer'
        >
          <ArrowLeftIcon
            width='12.16px'
            height='20.38px'
            color='var(--chakra-colors-blue-dark)'
          />
          <Text textStyle='smallText' color='blue.dark'>
            Back
          </Text>
        </Flex>
      )}
      <Flex
        h='100%'
        flexDir='column'
        justifyContent={{ base: 'space-between', xl: 'center' }}
      >
        <Flex
          flexDir='column'
          gap='60px'
          alignItems='center'
          mb={{ base: '20px', xl: '60px' }}
        >
          <Flex flexDir='column' gap={{ base: '8px', xl: '18px' }}>
            <Text textStyle='header' color='blue.dark' textAlign='center'>
              {LAYOUT_DETAILS?.[activeSelection]?.title}
            </Text>
            <Text textStyle='subheader' color='blue.dark' textAlign='center'>
              {LAYOUT_DETAILS?.[activeSelection]?.description}
            </Text>
          </Flex>
        </Flex>
        <Flex
          gap={{ base: '8px', xl: 'sm' }}
          alignItems='center'
          justifyContent='center'
          flexDir={{ base: 'column', xl: 'row' }}
          flex={{ base: 1, xl: 'unset' }}
        >
          {LAYOUT_DETAILS?.[activeSelection]?.selection?.options?.map(
            (option) => {
              const currentSelection =
                LAYOUT_DETAILS?.[activeSelection]?.selection
              const matchSelection = option?.match?.selection
              const matchSelectionOption = option?.match?.option

              const isSelectionMatched =
                !matchSelection || matchSelection in selection?.selectionDetails
              const isSelectionOptionMatched =
                !matchSelectionOption ||
                matchSelectionOption ===
                  selection?.selectionDetails?.[matchSelection as string]

              if (isSelectionMatched && isSelectionOptionMatched) {
                return option?.options?.map((activeOption) => {
                  return (
                    <Flex
                      key={window.crypto.randomUUID()}
                      w='100%'
                      maxW={{ base: '343px', xl: '400px' }}
                      h='100%'
                      maxH={{ base: '192px', xl: '420px' }}
                      p={{ base: '20px', xl: '24px' }}
                      bg='blue.light'
                      borderRadius='8px'
                      cursor='pointer'
                      transition='.1s'
                      _hover={{
                        bg: 'blue.medium',
                      }}
                      data-state='open'
                      _open={{
                        animation: 'fade-in 300ms ease-out',
                      }}
                      onClick={() => {
                        handleSelect({ currentSelection, activeOption })
                      }}
                    >
                      <Flex w='100%' flexDir='column' pos='relative'>
                        <Text
                          h='fit-content'
                          textStyle='smallText'
                          color='blue.dark'
                          textAlign='end'
                          mb={{ base: '0', xl: '43px' }}
                          pos={{ base: 'absolute', xl: 'relative' }}
                          my={{ base: 'auto' }}
                          top={{ base: '0', xl: 'unset' }}
                          bottom={{ base: '0', xl: 'unset' }}
                          right='0'
                        >
                          {activeOption?.name}
                        </Text>

                        <Flex h='100%' alignItems='center'>
                          <Image
                            w='auto'
                            h={{ base: '100%', xl: 'auto' }}
                            src={activeOption?.img}
                            alt={activeOption?.name}
                            mx={{ base: 'unset', xl: 'auto' }}
                          />
                        </Flex>
                      </Flex>
                    </Flex>
                  )
                })
              }
            }
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}
