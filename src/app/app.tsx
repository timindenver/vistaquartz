import { lazy } from 'react'

import { SelectionProvider } from 'core/context/selection'
import { SenderProvider } from 'core/context/sender'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './notFound'

const Constructor = lazy(() => import('./constructor/index'))

export default function App() {
  return (
    <BrowserRouter>
      <SelectionProvider>
        <SenderProvider>
          <Routes>
            <Route path='/' element={<>Root</>} />
            <Route path='/constructor' element={<Constructor />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </SenderProvider>
      </SelectionProvider>
    </BrowserRouter>
  )
}
