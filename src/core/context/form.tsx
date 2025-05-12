import { ReactNode } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import type { ImageListType } from 'react-images-uploading'

export type FormFields = [
  {
    formSubmitted: {
      text: string
      phone: string
    }
  },
  {
    city: string
    street: string
    state: string
    zip: string
  },
  {
    estimateReceiveMethod: 'text' | 'email' | ''
    textingPermission: 'yes' | 'no' | ''
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
        formSubmitted: {
          text: '',
          phone: '',
        },
      },
      {
        city: '',
        state: '',
        street: '',
        zip: '',
      },
      {
        textingPermission: '',
        confirmation: '',
      },
      {
        images: [],
      },
    ],
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
