import type { ImageListType } from 'react-images-uploading'

import { api } from './axios'

type SubmitDataProps = {
  body: {
    layout: string | null
    handling: string | null
    wallcolor: string | null
    plumbingFixturesColor: string | null
    plumbingFixturesItems: string | null
    additionalItems: string | null
    name: string | null
    lastName: string | null
    phone: string | null
    city: string | null
    street: string | null
    state: string | null
    zip: string | null
    receivingMethod: string | null
    propertyOwner: string | null
    images: ImageListType | null
  }
}

export const submitData = async ({ body }: SubmitDataProps) => {
  const request = await api.post('/', body)
  return request
}
