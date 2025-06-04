import { type Dispatch, type ReactNode, type SetStateAction, createContext, useContext, useState } from 'react'

import { DefaultAdditionalOptionValues, DefaultFixtureOptionValues, DefaultWallColorOptionValues, defaultFixtureOptions, defaultWallColorOptions } from 'app/constructor/modules/mainSelection/details'

export type FixtureOptionType = {
  color: DefaultFixtureOptionValues
  items: {
    handShowerWand: boolean
    shelf: boolean
  }
}

export type WallColorType = DefaultWallColorOptionValues

export type SelectionContextType = {
  selectionData: {
    handling: 'left' | 'right' | null
    layout: 'showerStall' | 'alcoveShower' | 'tubShowerCombo' | null
    fixtureOption: FixtureOptionType
    wallColor: WallColorType
    additionalItems: DefaultAdditionalOptionValues[]
  }
  setSelectionData: Dispatch<
    SetStateAction<{
      handling: 'left' | 'right' | null
      layout: 'showerStall' | 'alcoveShower' | 'tubShowerCombo' | null
      fixtureOption: FixtureOptionType
      wallColor: WallColorType
      additionalItems: DefaultAdditionalOptionValues[]
    }>
  >
}

const SelectionContext = createContext<SelectionContextType | null>(null)

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectionData, setSelectionData] = useState<SelectionContextType['selectionData']>({
    handling: null,
    layout: null,
    fixtureOption: {
      color: defaultFixtureOptions[0]['value'],
      items: {
        handShowerWand: false,
        shelf: false,
      },
    },
    wallColor: defaultWallColorOptions[0]['value'],
    additionalItems: [],
  })

  const value = {
    selectionData,
    setSelectionData,
  }

  return (
    // @ts-ignore
    <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>
  )
}

export const useSelection = () => {
  const context = useContext(SelectionContext)

  if (context === null) {
    throw new Error("useSelection can't be null")
  }

  return context
}
