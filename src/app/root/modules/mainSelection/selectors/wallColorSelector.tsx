import type { Dispatch, SetStateAction } from 'react'

import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Checkbox } from 'components/ui/checkbox'

import type {
  DefaultWallColorOptionValues,
  DefaultWallColorOptions,
} from '../details'
import css from '../styles.module.scss'

type WallColorSelectorProps = {
  wallColorOptions: DefaultWallColorOptions
  selectedWallColor: DefaultWallColorOptionValues
  setSelectedWallColor: Dispatch<SetStateAction<DefaultWallColorOptionValues>>
}

export const WallColorSelector = ({
  wallColorOptions,
  selectedWallColor,
  setSelectedWallColor,
}: WallColorSelectorProps) => {
  return (
    <Grid
      h='fit-content'
      gridTemplateColumns='repeat(auto-fill, minmax(43px, 1fr))'
    >
      {wallColorOptions?.map((wallColorOption) => {
        const isSelected = selectedWallColor === wallColorOption?.value

        return (
          <Flex
            key={wallColorOption?.value + 79845}
            gridColumn={isSelected ? 'auto / span 3' : 'auto'}
            flexDir='column'
            cursor='pointer'
            onClick={() => {
              setSelectedWallColor(wallColorOption?.value)
            }}
          >
            <Flex pos='relative'>
              <Image
                w='100%'
                minW='43px'
                h='88px'
                src={wallColorOption?.image?.selected}
                alt={wallColorOption?.name}
              />
              {isSelected && (
                <Checkbox
                  pos='absolute'
                  top='0'
                  right='0'
                  size='lg'
                  color='blue.dark'
                  className={css.checkbox}
                  checked={isSelected}
                ></Checkbox>
              )}
            </Flex>
            {isSelected && (
              <Flex
                h='34px'
                minH='fit-content'
                alignItems='center'
                justifyContent='center'
                bg='blue.medium'
              >
                <Text
                  textStyle='description'
                  color='blue.dark'
                  textAlign='center'
                >
                  {wallColorOption?.name}
                </Text>
              </Flex>
            )}
          </Flex>
        )
      })}
    </Grid>

    // <Flex h='fit-content' flexWrap='wrap' bg='red'>
    //   {wallColorOptions?.map((wallColorOption) => {
    //     const isSelected = selectedWallColor === wallColorOption?.value

    //     return (
    //       <Flex
    //         w='auto'
    //         minW={isSelected ? '129px' : '43px'}
    //         maxW={isSelected ? 'calc(129px + 43px)' : '43px'}
    //         key={wallColorOption?.value + 79845}
    //         flex={isSelected ? 3 : 1}
    //         flexDir='column'
    //         cursor='pointer'
    //         onClick={() => {
    //           setSelectedWallColor(wallColorOption?.value)
    //         }}
    //       >
    //         <Flex pos='relative'>
    //           <Image
    //             w='100%'
    //             minW='43px'
    //             h='88px'
    //             src={wallColorOption?.image?.selected}
    //             alt={wallColorOption?.name}
    //           />
    //           {isSelected && (
    //             <Checkbox
    //               pos='absolute'
    //               top='0'
    //               right='0'
    //               size='lg'
    //               color='blue.dark'
    //               className={css.checkbox}
    //               checked={isSelected}
    //             ></Checkbox>
    //           )}
    //         </Flex>
    //         {isSelected && (
    //           <Flex
    //             h='34px'
    //             minH='fit-content'
    //             alignItems='center'
    //             justifyContent='center'
    //             bg='blue.medium'
    //           >
    //             <Text
    //               textStyle='description'
    //               color='blue.dark'
    //               textAlign='center'
    //             >
    //               {wallColorOption?.name}
    //             </Text>
    //           </Flex>
    //         )}
    //       </Flex>
    //     )
    //   })}
    // </Flex>

    // <Flex
    //   w='100%'
    //   h='fit-content'
    //   flexWrap={{ base: 'wrap', xl: 'unset' }}
    //   gap='1px'
    // >
    //   {wallColorOptions?.map((wallColorOption) => {
    //     const isSelected = selectedWallColor === wallColorOption?.value

    //     return (
    //       <Flex
    //         key={wallColorOption?.value + 79845}
    //         w={{
    //           base: isSelected ? '129px' : '43px',
    //           xl: isSelected ? '166px' : 'unset',
    //         }}
    //         minW={{
    //           base: isSelected ? '129px' : '43px',
    //           xl: isSelected ? '166px' : 'unset',
    //         }}
    //         maxW={{
    //           base: isSelected ? '129px' : '43px',
    //           xl: isSelected ? '166px' : 'unset',
    //         }}
    //         flex={isSelected ? 4 : 1}
    //         flexDir='column'
    //         cursor='pointer'
    //         onClick={() => {
    //           setSelectedWallColor(wallColorOption?.value)
    //         }}
    //       >
    //         <Flex
    //           w={{ base: 'fit-content', xl: '100%' }}
    //           h={{ base: '88px', xl: '118px' }}
    //           pos='relative'
    //         >
    //           <Image
    //             w='100%'
    //             src={wallColorOption?.image?.selected}
    //             alt={wallColorOption?.name}
    //           />
    //           {isSelected && (
    //             <Checkbox
    //               pos='absolute'
    //               top='0'
    //               right='0'
    //               size='lg'
    //               color='blue.dark'
    //               className={css.checkbox}
    //               checked={isSelected}
    //             ></Checkbox>
    //           )}
    //         </Flex>
    //         {isSelected && (
    //           <Flex
    //             w='100%'
    //             h='34px'
    //             alignItems='center'
    //             justifyContent='center'
    //             bg='blue.medium'
    //           >
    //             <Text
    //               textStyle='description'
    //               color='blue.dark'
    //               textAlign='center'
    //             >
    //               {wallColorOption?.name}
    //             </Text>
    //           </Flex>
    //         )}
    //       </Flex>
    //     )
    //   })}
    // </Flex>
  )
}
