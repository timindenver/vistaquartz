import { lazy } from 'react'

import { SelectionProvider } from 'core/context/selection'
import ScrollToTop from 'core/hooks/scrollToTop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'shared/layouts/layout'

const About = lazy(() => import('./about'))
const FAQ = lazy(() => import('./faq'))
const HallOfShame = lazy(() => import('./hallOfShame'))
const NotFound = lazy(() => import('./notFound'))
const OurTeam = lazy(() => import('./ourTeam'))
const PrivacyPolicy = lazy(() => import('./privacyPolicy'))
const Root = lazy(() => import('./root'))
const WhyNaturalSolidSurface = lazy(() => import('./whyNaturalSolidSurface'))
const Constructor = lazy(() => import('./constructor/index'))

export default function App() {
  return (
    <BrowserRouter>
      <SelectionProvider>
        <ScrollToTop />
        <Routes>
          <Route path='/design' element={<Constructor />} />
          <Route
            path='*'
            element={
              <Layout>
                <Routes>
                  <Route path='/' element={<Root />} />
                  <Route path='/why-natural-solid-surface' element={<WhyNaturalSolidSurface />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/hall-of-shame' element={<HallOfShame />} />
                  <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                  <Route path='/faq' element={<FAQ />} />
                  <Route path='/team' element={<OurTeam />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </SelectionProvider>
    </BrowserRouter>
  )
}
