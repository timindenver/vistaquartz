import type { ImageListType } from 'react-images-uploading'

import { api } from './axios'

type SubmitDataProps = {
  body: {
    layout: string | null
    handling: string | null
    wallColor: string | null
    plumbingFixturesColor: string | null
    plumbingFixturesItems: string | null
    additionalItems: string | null
    city: string | null
    street: string | null
    state: string | null
    zip: string | null
    propertyOwner: string | null
    imagesFolderId: string
  }
}

export const submitData = async ({ body }: SubmitDataProps) => {
  const request = await api.post('/', body)
  return request
}

export const submitImages = async ({ images, imagesFolderId }: { images: ImageListType; imagesFolderId: string }) => {
  let isSuccessful = true

  try {
    await Promise.all(
      images.map(async (image) => {
        await api.post('/images', {
          images: [image],
          imagesFolderId,
        })
      })
    )
  } catch (error) {
    isSuccessful = false
  }

  return isSuccessful
}
