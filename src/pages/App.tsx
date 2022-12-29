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
const LidoInfo = lazy(() => import('./Registration/Lido/Detail'))

const Uniswap = lazy(() => import('./Registration/Uniswap'))
const UniswapInfo = lazy(() => import('./Registration/Uniswap/Detail'))

const Ethereum = lazy(() => import('./BlockChain/Ethereum'))
const Solana = lazy(() => import('./BlockChain/Solana'))

const Polygon = lazy(() => import('./BlockChain/Polygon'))
const Bsc = lazy(() => import('./BlockChain/Bsc'))
const Ada = lazy(() => import('./BlockChain/Ada'))
const Algo = lazy(() => import('./BlockChain/Algo'))

const Atom = lazy(() => import('./BlockChain/Atom'))
const Doge = lazy(() => import('./BlockChain/Doge'))
const Litecoin = lazy(() => import('./BlockChain/Ltc'))
const Dot = lazy(() => import('./BlockChain/Dot'))

const Avalanche = lazy(() => import('./BlockChain/Avalanche'))

const AppWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* padding: 120px 16px 0px 16px; */
  /* padding-left: 16px;
  padding-right: 16px; */
  align-items: center;
  flex: 1;
  z-index: 1;

  /* ${({ theme }) => theme.mediaWidth.upToSmall`
  padding: 6rem 16px 16px 16px;
  `}; */
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

const LoadWrapper = styled.div`
  margin-top: 5rem;
`

// this is the same svg defined in assets/images/blue-loader.svg
// it is defined here because the remote asset may not have had time to load when this file is executing
const LazyLoadSpinner = () => (
  <LoadWrapper>
    <SpinnerSVG width="94" height="94" viewBox="0 0 94 94" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M92 47C92 22.1472 71.8528 2 47 2C22.1472 2 2 22.1472 2 47C2 71.8528 22.1472 92 47 92"
        stroke="#2172E5"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SpinnerSVG>
  </LoadWrapper>
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
                path="lido"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Lido />
                  </Suspense>
                }
              />
              <Route
                path="lido/info"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <LidoInfo />
                  </Suspense>
                }
              />
              <Route
                path="uniswap"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Uniswap />
                  </Suspense>
                }
              />

              <Route
                path="uniswap/info"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <UniswapInfo />
                  </Suspense>
                }
              />

              <Route
                path="ethereum"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Ethereum />
                  </Suspense>
                }
              />

              <Route
                path="solana"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Solana />
                  </Suspense>
                }
              />

              <Route
                path="polygon"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Polygon />
                  </Suspense>
                }
              />

              <Route
                path="bsc"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Bsc />
                  </Suspense>
                }
              />

              <Route
                path="ada"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Ada />
                  </Suspense>
                }
              />

              <Route
                path="algo"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Algo />
                  </Suspense>
                }
              />

              <Route
                path="atom"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Atom />
                  </Suspense>
                }
              />

              <Route
                path="avalanche"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Avalanche />
                  </Suspense>
                }
              />

              <Route
                path="doge"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Doge />
                  </Suspense>
                }
              />

              <Route
                path="litecoin"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Litecoin />
                  </Suspense>
                }
              />
              <Route
                path="dot"
                element={
                  <Suspense fallback={<LazyLoadSpinner />}>
                    <Dot />
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
