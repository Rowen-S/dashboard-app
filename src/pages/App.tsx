import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense, useEffect } from 'react'

import styled from 'styled-components/macro'

import ErrorBoundary from 'components/ErrorBoundary'
import Loader from 'components/Loader'

import { useAnalyticsReporter } from '../components/analytics'

import Home from './Home'
import { RedirectPathToHomeOnly } from './Home/redirects'
import Header from 'components/Header'
import { SpinnerSVG } from 'theme/components'

const Lido = lazy(() => import('./Registration/Lido'))
const Aptos = lazy(() => import('./Registration/Aptos'))

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

const HeaderWrapper = styled.div`
  ${({ theme }) => theme.flexRowNoWrap}
  width: 100%;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2;
`

const Marginer = styled.div`
  margin-top: 5rem;
`

// this is the same svg defined in assets/images/blue-loader.svg
// it is defined here because the remote asset may not have had time to load when this file is executing
const LazyLoadSpinner = () => (
  <SpinnerSVG width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92"
      stroke="#2172E5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SpinnerSVG>
)

function App() {
  const { pathname } = useLocation()

  useAnalyticsReporter()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <ErrorBoundary>
      <AppWrapper>
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        <BodyWrapper>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="home" element={<Home />} />
              <Route
                path="lido/*"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Lido />
                  </Suspense>
                }
              />
              <Route
                path="aptos/*"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Aptos />
                  </Suspense>
                }
              />
              <Route path="*" element={<RedirectPathToHomeOnly />} />
            </Routes>
          </Suspense>
          <Marginer />
        </BodyWrapper>
      </AppWrapper>
    </ErrorBoundary>
  )
}

export default App