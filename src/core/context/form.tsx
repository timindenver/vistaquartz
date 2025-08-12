import { ReactNode } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import type { ImageListType } from 'react-images-uploading'

export type FormFields = [
  {
    formSubmitted: boolean
  },
  {
    city: string
    street: string
    state: string
    zip: string
  },
  {
    confirmation: 'owner' | 'non-owner' | ''
  },
  {
    images?: ImageListType
  },
]

export const SubmitFormProvider = ({ children }: { children: ReactNode }) => {
  const methods = useForm<FormFields>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: [
      {
        formSubmitted: false,
      },
      {
        city: '',
        state: '',
        street: '',
        zip: '',
      },
      {
        confirmation: '',
      },
      {
        images: [],
      },
    ],
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
