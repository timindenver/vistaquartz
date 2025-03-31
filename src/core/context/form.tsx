import { ReactNode } from 'react'

import { FormProvider, type UseFormReturn, useForm } from 'react-hook-form'
import type { ImageListType } from 'react-images-uploading'

export type FormFields = [
  {
    firstName: string
    lastName: string
    phone: string
  },
  {
    city: string
    street: string
    state: string
    zip: string
  },
  {
    estimateReceiveMethod: 'text' | 'email' | ''
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
        firstName: '',
        lastName: '',
        phone: '',
      },
      {
        city: '',
        state: '',
        street: '',
        zip: '',
      },
      {
        estimateReceiveMethod: '',
        confirmation: '',
      },
      {
        images: [],
      },
    ],
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
