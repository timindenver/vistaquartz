//@ts-nocheck
import { type Dispatch, type ReactNode, type SetStateAction, createContext, useContext, useEffect, useMemo, useState } from 'react'

export type SenderContextType = {
  RenderContactInfoForm: JSX.Element
  RenderContactSubmitForm: JSX.Element
  senderForms: any
  executeWhenFormsLoaded: any
}

const SenderContext = createContext<SenderContextType | null>(null)

export const SenderProvider = ({ children }: { children: ReactNode }) => {
  const [senderForms, setSenderForms] = useState(null)

  const executeWhenFormsLoaded = (func) => {
    if (!window.senderFormsLoaded) {
      window.addEventListener('onSenderFormsLoaded', function () {
        return func()
      })
    } else {
      return func()
    }
  }

  useEffect(() => {
    ;(function (s, e, n, d, er) {
      s['Sender'] = er
      ;(s[er] =
        s[er] ||
        function () {
          ;(s[er].q = s[er].q || []).push(arguments)
        }),
        (s[er].l = 1 * new Date())
      var a = e.createElement(n),
        m = e.getElementsByTagName(n)[0]
      a.async = 1
      a.src = d
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js?explicit=true', 'sender')
    window.sender('dca5b29b996720')

    executeWhenFormsLoaded(() => {
      setSenderForms(window.senderForms)
    })
  }, [])

  const RenderContactInfoForm = <div className='sender-form-field' data-sender-form-id='ma2i9qsbav2dq59cu5a'></div>
  const RenderContactSubmitForm = <div className='sender-form-field' data-sender-form-id='ma175kfpez6poguqytr'></div>

  const value = {
    RenderContactInfoForm,
    RenderContactSubmitForm,
    senderForms,
    executeWhenFormsLoaded,
  }

  return (
    // @ts-ignore
    <SenderContext.Provider value={value}>{children}</SenderContext.Provider>
  )
}

export const useSender = () => {
  const context = useContext(SenderContext)

  if (context === null) {
    throw new Error("useSender can't be null")
  }

  return context
}
