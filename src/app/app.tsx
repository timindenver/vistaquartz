import { lazy, useEffect } from 'react'

import { SelectionProvider } from 'core/context/selection'
import { useImagePreloader } from 'core/hooks/image'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './notFound'

const Root = lazy(() => import('./root/index'))

export default function App() {
  const imagePreloader = useImagePreloader()

  useEffect(() => {
    imagePreloader.preload('all')
  }, [])

  return (
    <BrowserRouter>
      <SelectionProvider>
        <Routes>
          <Route path='/' element={<Root />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </SelectionProvider>
    </BrowserRouter>
  )
}
