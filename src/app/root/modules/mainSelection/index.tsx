import { type Dispatch, type SetStateAction, useState } from 'react'

import {
  Button,
  Flex,
  Separator,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import { recipes } from 'components/ui/theme/recipes'
import { Tooltip } from 'components/ui/tooltip'
import { useSelection } from 'core/context/selection'
import { getImageFilename, useFinalRenders } from 'core/hooks/image'
import { saveAs } from 'file-saver'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import ArrowDown from 'shared/assets/icons/arrowDown'
import ChatInfoIcon from 'shared/assets/icons/chatInfo'
import CloseIcon from 'shared/assets/icons/close'
import DownloadIcon from 'shared/assets/icons/download'
import DrawIcon from 'shared/assets/icons/draw'
import ShowerIcon from 'shared/assets/icons/shower'
import ZoomIcon from 'shared/assets/icons/zoom'

import {
  type DefaultAdditionalOptionValues,
  MAIN_LAYOUT_DETAILS,
} from './details'
import { AdditionalItemsSelector } from './selectors/additionalItemsSelector'
import { FixturesSelector } from './selectors/fixturesSelector'
import { WallColorSelector } from './selectors/wallColorSelector'

type MainSelectionProps = {
  setActiveStep: Dispatch<SetStateAction<number>>
}

export const MainSelection = ({ setActiveStep }: MainSelectionProps) => {
  const selection = useSelection()

  const { wallColorOptions, fixtureOptions, additionalOptions } =
    MAIN_LAYOUT_DETAILS?.[selection?.currentSelectionLayout]

  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false)
  const [selectedWallColor, setSelectedWallColor] = useState(
    wallColorOptions?.[0]?.value
  )
  const [selectedFixtureOption, setSelectedFixtureOption] = useState({
    color: fixtureOptions?.[0]?.value,
    items: {
      handShowerWand: false,
      shelf: false,
    },
  })
  const [selectedAdditionalItems, setSelectedAdditionalItems] = useState<{
    open: boolean
    items: DefaultAdditionalOptionValues[]
  }>({
    open: false,
    items: [],
  })
  const [openTab, setOpenTab] = useState<'wallColor' | 'finish' | 'additional'>(
    'wallColor'
  )

  const { image: activeImageURL, name: activeImageName } = useFinalRenders({
    fileName: getImageFilename({
      selection,
      selectedFixtureOption,
      selectedWallColor,
    }),
  })

  const isMobile = useBreakpointValue({ base: true, xl: false })

  return (
    <Flex
      w={{ base: '100%', sm: '375px', xl: 'fit-content' }}
      h='100%'
      minH='fit-content'
      maxH={{ base: 'unset', xl: '740px' }}
      justifyContent='center'
      gap={{ base: '0', xl: 'sm' }}
      bg='blue.light'
      pos='relative'
      mx='auto'
      flexDir={{ base: 'column', xl: 'row' }}
      alignItems='center'
    >
      <Flex
        w='calc(100% - 32px)'
        maxW={{ base: '343px', xl: '592px' }}
        pos='relative'
      >
        <InnerImageZoom
          src={activeImageURL}
          zoomScale={1}
          hideCloseButton
          hideHint
        />
        <Flex
          w='44px'
          h='44px'
          alignItems='center'
          justifyContent='center'
          borderRadius='50%'
          bg='blue.dark'
          pos='absolute'
          right='md'
          top={{ base: '0', xl: 'md' }}
          bottom={{ base: '0', xl: 'unset' }}
          my={{ base: 'auto', xl: 'unset' }}
          pointerEvents='none'
        >
          <ZoomIcon color='white' />
        </Flex>
      </Flex>
      <Flex
        w='100%'
        maxW='695px'
        h='100%'
        maxH='inherit'
        flexDir='column'
        justifyContent='space-between'
        bg='white'
        py={{ base: 'md', xl: '26px' }}
        px={{ base: 'md', xl: '44px' }}
        gap='md'
      >
        <Flex w='100%' h='100%' flexDir='column' overflowY='auto'>
          {isMobile && (
            <Flex
              w='100%'
              alignItems='center'
              justifyContent='space-between'
              mb='md'
            >
              <Text
                textStyle='subheader'
                color='blue.dark'
                textAlign='center'
                borderBottom='2px solid'
                borderColor={
                  openTab === 'wallColor' ? 'blue.dark' : 'transparent'
                }
                cursor='pointer'
                onClick={() => {
                  setOpenTab('wallColor')
                }}
              >
                Wall color
              </Text>
              <Text
                textStyle='subheader'
                color='blue.dark'
                textAlign='center'
                borderBottom='2px solid'
                borderColor={openTab === 'finish' ? 'blue.dark' : 'transparent'}
                cursor='pointer'
                onClick={() => {
                  setOpenTab('finish')
                }}
              >
                Finish
              </Text>
              <Text
                textStyle='subheader'
                color='blue.dark'
                textAlign='center'
                borderBottom='2px solid'
                borderColor={
                  openTab === 'additional' ? 'blue.dark' : 'transparent'
                }
                cursor='pointer'
                onClick={() => {
                  setOpenTab('additional')
                }}
              >
                Additional
              </Text>
            </Flex>
          )}
          <Flex w='100%' flexDir='column' gap='md'>
            {!isMobile && (
              <Text textStyle='subheader' color='blue.dark'>
                Select wall color
              </Text>
            )}
            {(!isMobile || openTab === 'wallColor') && (
              <WallColorSelector
                wallColorOptions={wallColorOptions}
                selectedWallColor={selectedWallColor}
                setSelectedWallColor={setSelectedWallColor}
              />
            )}
          </Flex>
          {!isMobile && (
            <Separator
              orientation='horizontal'
              borderColor='blue.dark'
              my='28px'
            />
          )}
          <Flex
            w='100%'
            flexDir='column'
            gap={!isMobile || openTab === 'finish' ? 'md' : '0'}
          >
            {!isMobile && (
              <Text textStyle='subheader' color='blue.dark'>
                Select finish to plumbing fixtures
              </Text>
            )}
            {(!isMobile || openTab === 'finish') && (
              <FixturesSelector
                fixtureOptions={fixtureOptions}
                selectedFixtureOption={selectedFixtureOption}
                setSelectedFixtureOption={setSelectedFixtureOption}
              />
            )}
          </Flex>
          {!isMobile && (
            <Separator
              orientation='horizontal'
              borderColor='blue.dark'
              my='28px'
            />
          )}
          {(!isMobile || openTab === 'additional') && (
            <Flex w='100%' flexDir='column' gap='md'>
              {!isMobile && (
                <Flex flexDir='column' gap='8px'>
                  <Flex
                    w='fit-content'
                    alignItems='center'
                    gap='md'
                    cursor='pointer'
                    onClick={() => {
                      setSelectedAdditionalItems((prev) => ({
                        ...prev,
                        open: !prev.open,
                      }))
                    }}
                  >
                    <Text textStyle='subheader' color='blue.dark'>
                      Additional items
                    </Text>
                    <Flex
                      transform={
                        selectedAdditionalItems?.open ? 'rotate(180deg)' : ''
                      }
                    >
                      <ArrowDown
                        width='24px'
                        height='14px'
                        color='var(--chakra-colors-blue-dark)'
                      />
                    </Flex>
                  </Flex>
                  <Text textStyle='description' color='blue.dark'>
                    Selections will be shown in price estimate but not in design
                    preview
                  </Text>
                </Flex>
              )}
              {(selectedAdditionalItems?.open || isMobile) && (
                <Flex flexDir='column' gap='4px'>
                  {isMobile && (
                    <Text textStyle='description' color='blue.dark'>
                      Selections will be shown in price estimate but not in
                      design preview
                    </Text>
                  )}
                  <AdditionalItemsSelector
                    additionalOptions={additionalOptions}
                    selectedAdditionalItems={selectedAdditionalItems}
                    setSelectedAdditionalItems={setSelectedAdditionalItems}
                    isMobile={isMobile}
                  />
                </Flex>
              )}
            </Flex>
          )}
        </Flex>

        <Flex
          w='100%'
          alignItems='center'
          justifyContent='space-between'
          gap={{ base: '7px', xl: 'md' }}
        >
          <Button
            flex='1'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            gap='10px'
            onClick={() => {
              setActiveStep((prev) => prev + 1)
            }}
          >
            <DrawIcon width='17px' height='16px' color='white' />
            <Text textStyle='button' mt='4px'>
              {isMobile ? 'Finalize' : 'Finalize My Design'}
            </Text>
          </Button>
          <Button
            flex='1'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            gap='10px'
            onClick={() => {
              saveAs(activeImageURL, activeImageName)
            }}
          >
            <DownloadIcon width='15px' height='15px' color='white' />
            <Text textStyle='button' mt='4px'>
              Download
            </Text>
          </Button>
        </Flex>
      </Flex>

      <Flex
        w={{ base: '100%', xl: 'calc(100% + 50px)' }}
        maxW='100vw'
        h='calc(100% + 50px)'
        maxH={{ base: '100%', xl: '100vh' }}
        justifyContent='space-between'
        flexDir={{ base: 'row', xl: 'column' }}
        pos='absolute'
        zIndex='1'
        top='0'
        bottom='0'
        mx='auto'
        my='auto'
        pointerEvents='none'
      >
        <Button
          w={{ base: '50px', xl: 'fit-content' }}
          h={{ base: '50px', xl: recipes.button.variants?.variant.primary.h }}
          pointerEvents='all'
          onClick={() => {
            setActiveStep(0)
          }}
        >
          {isMobile && (
            <ShowerIcon
              width={isMobile ? '17px' : '13px'}
              height={isMobile ? '23px' : '17px'}
              color='white'
            />
          )}
          {!isMobile && 'Re·start'}
        </Button>
        <Tooltip
          open={infoTooltipOpen}
          onOpenChange={(event) => setInfoTooltipOpen(event.open)}
          openDelay={100}
          closeDelay={100}
          contentProps={{ css: { '--tooltip-bg': 'white' } }}
          positioning={{
            placement: 'bottom-end',
            offset: { mainAxis: 0 },
          }}
          interactive={true}
          closeOnClick={false}
          closeOnPointerDown={false}
          content={
            <Flex w='100%' flexDir='column' p='md' gap='md'>
              <Flex
                w='100%'
                alignItems='center'
                justifyContent='space-between'
                gap='md'
              >
                <Text textStyle='categories' color='blue.dark'>
                  Information
                </Text>
                <CloseIcon
                  width='14px'
                  height='14px'
                  color='var(--chakra-colors-blue-dark)'
                  cursor='pointer'
                  onClick={() => {
                    setInfoTooltipOpen(false)
                  }}
                />
              </Flex>
              <Flex flexDir='column' gap='8px'>
                <Text textStyle='description' color='blue.dark'>
                  More options are available during your in-home design consult
                  as well as physical samples.
                </Text>
                <Text textStyle='description' color='blue.dark'>
                  Colors on your screen may not be 100% accurate due to monitor
                  calibration issues.
                </Text>
              </Flex>
            </Flex>
          }
        >
          <Button
            w={{ base: '50px', xl: 'fit-content' }}
            h={{ base: '50px', xl: recipes.button.variants?.variant.primary.h }}
            pointerEvents='all'
            onClick={() => {
              setInfoTooltipOpen((prev) => !prev)
            }}
          >
            <ChatInfoIcon
              width={isMobile ? '21px' : '16px'}
              height={isMobile ? '21px' : '16px'}
              color='white'
            />
            {!isMobile && 'Info'}
          </Button>
        </Tooltip>
      </Flex>
    </Flex>
  )
}
