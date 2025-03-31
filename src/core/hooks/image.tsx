import { useEffect, useRef, useState } from 'react'

import type { FixtureOptionType, SelectionContextType, WallColorType } from 'core/context/selection'

const MAX_PRELOAD_CHUNK_SIZE = 7
const path = 'shared/assets/FinalRenders_progressive_50/'
const allAssets = import.meta.glob('../../shared/assets/FinalRenders_progressive_50/**', {
  eager: true,
})

export type SelectiveAssetsType = {
  alcoveShower: {
    all: Record<string, any>
    first: Record<string, any>
  }
  alcoveTub: {
    all: Record<string, any>
    first: Record<string, any>
  }
  californiaSystem: {
    all: Record<string, any>
    first: Record<string, any>
  }
}

const selectiveAssets: SelectiveAssetsType = {
  alcoveShower: {
    all: import.meta.glob('../../shared/assets/FinalRenders_progressive_50/alcoveShower/**', {
      eager: true,
    }),
    first: import.meta.glob('../../shared/assets/FinalRenders_progressive_50/alcoveShower/ALCOVE_SHOWER_BLACK/**', {
      eager: true,
    }),
  },
  alcoveTub: {
    all: import.meta.glob('../../shared/assets/FinalRenders_progressive_50/alcoveTub/**', {
      eager: true,
    }),
    first: import.meta.glob('../../shared/assets/FinalRenders_progressive_50/alcoveTub/ALCOVE_TUB_BLACK/**', {
      eager: true,
    }),
  },
  californiaSystem: {
    all: import.meta.glob('../../shared/assets/FinalRenders_progressive_50/californiaSystem/**', {
      eager: true,
    }),
    first: import.meta.glob('../../shared/assets/FinalRenders_progressive_50/californiaSystem/CALIFORNIA_SHOWER_BLACK/**', {
      eager: true,
    }),
  },
}

type GetImageFilenameProps = {
  selection: SelectionContextType
  selectedFixtureOption: FixtureOptionType
  selectedWallColor: WallColorType
}

export const getImageFilename = ({ selection, selectedFixtureOption, selectedWallColor }: GetImageFilenameProps) => {
  let filename = ''
  let fixturePrefix = ''

  switch (selection?.selectionData.layout) {
    case 'showerStall': {
      filename += 'californiaSystem/'
      fixturePrefix += 'CALIFORNIA_SHOWER_'
      break
    }
    case 'alcoveShower': {
      filename += 'alcoveShower/'
      fixturePrefix += 'ALCOVE_SHOWER_'
      break
    }
    case 'tubShowerCombo': {
      filename += 'alcoveTub/'
      fixturePrefix += 'ALCOVE_TUB_'
      break
    }
  }
  filename += fixturePrefix

  switch (selectedFixtureOption.color) {
    case 'matteBlack': {
      filename += 'BLACK/'
      break
    }
    case 'brushedGold': {
      filename += 'GOLD/'
      break
    }
    case 'brushedNickel': {
      filename += 'NICKEL/'
      break
    }
    case 'polishedChrome': {
      filename += 'CHROME/'
      break
    }
  }

  switch (selectedWallColor) {
    case 'diamondCreme': {
      filename += '10_Diamond_Creme'
      break
    }
    case 'statuario': {
      filename += '4_Bianco_Statuario'
      break
    }
    case 'pietraGrey': {
      filename += '11_Pietra_Grey'
      break
    }
    case 'calacatta': {
      filename += '5_Calacatta_Michelangelo'
      break
    }
    case 'paleClay': {
      filename += '3_Fokos_Sale'
      break
    }
    case 'earth': {
      filename += '8_La_Terra'
      break
    }
    case 'silverStrata': {
      filename += '12_Strata_Argentum'
      break
    }
    case 'biancoLasa': {
      filename += '2_Bianco_Lasa'
      break
    }
    case 'brushedOnyx': {
      filename += '1_Ossido_Nero'
      break
    }
    case 'absoluteWhite': {
      filename += '7_Bianco_Assoluto'
      break
    }
    case 'sandstoneCreme': {
      filename += '6_Calce_bianco'
      break
    }
    case 'greyBlend': {
      filename += '9_Blend_Grigio'
      break
    }
  }

  if (selectedFixtureOption.items.handShowerWand) {
    filename += '_HS'

    if (selectedFixtureOption.items.shelf) {
      filename += '_SHELVES'
    }
  } else {
    if (selectedFixtureOption.items.shelf) {
      filename += '_SHELVES'
    }
  }

  filename += '_progressive.jpg'

  return filename
}

export function useImagePreloader() {
  const abortControllerRef = useRef(new AbortController())
  const preloadedImagesRef = useRef<string[]>([])
  const [details, setDetails] = useState({
    finished: false,
  })

  const preloadImage = (src: string, signal: AbortSignal) => {
    return new Promise((resolve, reject) => {
      if (signal.aborted) {
        reject(new Error('Aborted'))
        return
      }

      const img = new Image()
      img.onload = function () {
        resolve(img)
      }
      img.onerror = img.onabort = function () {
        reject(src)
      }

      signal.addEventListener('abort', () => {
        img.src = ''
        reject(new Error('Aborted'))
      })

      img.src = src
    })
  }

  const preload = async (assets: any) => {
    const signal = abortControllerRef.current.signal
    const toPreload = assets === 'all' ? (Object.values(allAssets) as string[]) : (Object.values(assets) as string[])

    for (let i = 0; i < toPreload.length; i += MAX_PRELOAD_CHUNK_SIZE) {
      if (signal.aborted) {
        return
      }

      const preloadChunk = toPreload.slice(i, i + MAX_PRELOAD_CHUNK_SIZE)
      const preloadList: string[] = []

      for (const i of preloadChunk) {
        // @ts-ignore
        preloadList.push(preloadImage(i.default, signal))
      }

      try {
        await Promise.all(preloadList)
        preloadedImagesRef.current.push(...preloadChunk)
      } catch (error) {
        if ((error as any).message === 'Aborted') {
          console.log('Preloading aborted')
          return
        }
      }
    }

    setDetails((prev) => ({ ...prev, finished: true }))
  }

  const selectivePreload = async ({ name, type, then }: { name: keyof SelectiveAssetsType | 'all'; type: 'all' | 'first'; then: 'stop' | 'continue' }) => {
    console.log('Working on: ', name + type)
    abortControllerRef.current.abort()

    if (name === 'all') {
      preload('all')
      return
    }

    preload(selectiveAssets[name][type])

    if (then === 'continue') {
      if (type === 'first') {
        // console.log('Working on: ', name + 'all')
        await preload(selectiveAssets[name]['all'])
        // console.log('Working on: ', 'all')
        await preload('all')
      } else {
        // console.log('Working on: ', 'all')
        await preload('all')
      }
    }
  }

  const forceStop = () => {
    console.log('Force Stopped!!!!!!')
    abortControllerRef.current.abort()
    abortControllerRef.current = new AbortController()
  }

  return {
    preload,
    selectivePreload,
    forceStop,
    preloadedImages: preloadedImagesRef.current,
    details,
  }
}

const beautifyFilename = (input: string) => {
  // Replace ".jpg" with ""
  let result = input.replace('.jpg', '')

  // Replace "_" with " "
  result = result.replace(/_/g, ' ')

  // (Repeat of Step 1) Replace ".jpg" with "" (if any remaining)
  result = result.replace('.jpg', '')

  // Remove everything before the first "/"
  result = result.split('/').slice(1).join('/') // Remove everything before the first "/"

  // Replace "/" with " - "
  result = result.replace(/\//g, ' - ')

  // Remove all "progressive"
  result = result.replace(/\progressive/g, '')

  // Remove all numbers
  result = result.replace(/\d+/g, '')

  // Remove all double spaces
  result = result.replace(/\s+/g, ' ').trim()

  // Lowercase everything and capitalize the first letter of each word
  result = result.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())

  return result
}

export const useFinalRenders = ({ fileName }: { fileName: string }) => {
  const imagePreloader = useImagePreloader()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [image, setImage] = useState<string>('')
  const [name, setName] = useState<string>('')

  useEffect(() => {
    const fetchImage = async () => {
      const preloadedImage = await imagePreloader?.preloadedImages?.find(
        (img) =>
          // @ts-ignore
          img?.src?.includes(path + fileName)
        // @ts-ignore
      )?.src
      // @ts-ignore
      const nonPreloadedImage = allAssets['../../' + path + fileName]?.default

      if (!preloadedImage) {
        imagePreloader.forceStop()
      }

      try {
        setImage(preloadedImage || nonPreloadedImage)
        setName(beautifyFilename(fileName))
      } catch (err) {
        console.warn(err)
        setError(err as any)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [fileName])

  return {
    loading,
    error,
    image,
    name,
  }
}
