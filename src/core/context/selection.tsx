import {
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

export type SelectionContextProps = {
  selectionDetails: {
    [key: string]: string
  }
  setSelectionDetails: Dispatch<
    SetStateAction<{
      [key: string]: string
    }>
  >
  currentSelectionLayout: 'showerStall' | 'alcoveShower' | 'tubShowerCombo'
  currentSelectionHandling: 'left' | 'right'
} | null

const SelectionContext = createContext<SelectionContextProps>(null)

export const SelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectionDetails, setSelectionDetails] = useState<{
    [key: string]: string
  }>({})

  const value = {
    selectionDetails,
    setSelectionDetails,
    currentSelectionLayout: selectionDetails?.['layout'],
    currentSelectionHandling: selectionDetails?.['handling'],
  }

  return (
    // @ts-ignore
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  )
}

export const useSelection = () => {
  const context = useContext(SelectionContext)

  if (context === null) {
    throw new Error("useSelection can't be null")
  }

  return context
}
