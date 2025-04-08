import { type ReactNode, createContext, useContext, useEffect } from 'react'

import { useImagePreloader } from 'core/hooks/image'

export type SelectionPreloaderContextType = {
  preload: () => Promise<void>
  preloadedImages: string[]
}

const SelectionPreloaderContext = createContext<SelectionPreloaderContextType | null>(null)

export const SelectionPreloaderProvider = ({ children }: { children: ReactNode }) => {
  const imagePreloader = useImagePreloader()

  useEffect(() => {
    imagePreloader.preload()
  }, [])

  return (
    // @ts-ignore
    <SelectionPreloaderContext.Provider value={imagePreloader}>{children}</SelectionPreloaderContext.Provider>
  )
}

export const useSelectionPreloader = () => {
  const context = useContext(SelectionPreloaderContext)

  if (context === null) {
    throw new Error("useSelectionPreloader can't be null")
  }

  return context
}
