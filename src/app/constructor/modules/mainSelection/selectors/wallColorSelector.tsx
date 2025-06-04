import { Flex, Grid, Image, Text } from '@chakra-ui/react'
import { Checkbox } from 'components/ui/checkbox'
import { useSelection } from 'core/context/selection'

import type { DefaultWallColorOptions } from '../details'
import css from '../styles.module.scss'

type WallColorSelectorProps = {
  wallColorOptions: DefaultWallColorOptions
}

export const WallColorSelector = ({ wallColorOptions }: WallColorSelectorProps) => {
  const selection = useSelection()
  const selectedWallColor = selection.selectionData.wallColor

  return (
    <Grid h='fit-content' gridTemplateColumns='repeat(auto-fill, minmax(43px, 1fr))' gapY={{ base: 'md', xl: 'unset' }}>
      {wallColorOptions?.map((wallColorOption) => {
        const isSelected = selectedWallColor === wallColorOption?.value

        return (
          <Flex
            key={wallColorOption?.value + 79845}
            gridColumn={isSelected ? 'auto / span 3' : 'auto'}
            flexDir='column'
            pos='relative'
            cursor='pointer'
            onClick={() => {
              selection.setSelectionData((prev) => ({
                ...prev,
                wallColor: wallColorOption?.value,
              }))
            }}
          >
            <Flex pos='relative'>
              <Image w='100%' minW='43px' h='88px' src={wallColorOption?.image?.selected} alt={wallColorOption?.name} />
              {isSelected && <Checkbox pos='absolute' top='0' right='0' size='lg' color='blue.dark' className={css.checkbox} checked={isSelected}></Checkbox>}
            </Flex>
            {isSelected && (
              <Flex w='100%' h='34px' minH='fit-content' alignItems='center' justifyContent='center' bg='blue.medium' pos={{ base: 'absolute', xl: 'unset' }} left='0' bottom='0'>
                <Text textStyle='description' color='blue.dark' textAlign='center'>
                  {wallColorOption?.name}
                </Text>
              </Flex>
            )}
          </Flex>
        )
      })}
    </Grid>
  )
}
