import { lazy } from 'react'

import { SelectionProvider } from 'core/context/selection'
import { SenderProvider } from 'core/context/sender'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './notFound'

const Root = lazy(() => import('./root/index'))

export default function App() {
  return (
    <BrowserRouter>
      <SelectionProvider>
        <SenderProvider>
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </SenderProvider>
      </SelectionProvider>
    </BrowserRouter>
  )
}
