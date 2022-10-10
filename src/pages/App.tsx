import { Route, Routes, useLocation } from 'react-router-dom'
import { Suspense, useEffect } from 'react'

import styled from 'styled-components/macro'

import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Loader'

import { useAnalyticsReporter } from '../components/analytics'

import Home from './Home'
import { RedirectPathToHomeOnly } from './Home/redirects'

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 120px 16px 0px 16px;
  align-items: center;
  flex: 1;
  z-index: 1;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  padding: 6rem 16px 16px 16px;
  `};
`

function App() {
  const { pathname } = useLocation()

  useAnalyticsReporter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ErrorBoundary>
      <AppWrapper>
        <BodyWrapper>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="home" element={<Home />} />

              <Route path="*" element={<RedirectPathToHomeOnly />} />
            </Routes>
          </Suspense>
        </BodyWrapper>
      </AppWrapper>
    </ErrorBoundary>
  )
}

export default App
