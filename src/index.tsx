import '@reach/tabs/styles.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { store } from './state'
import UserUpdater from './state/user/updater'

import reportWebVitals from './reportWebVitals'

import ThemeProvider, { ThemedGlobalStyle } from './theme'

function Updaters() {
  return (
    <>
      <UserUpdater />
    </>
  )
}

const container = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

container.render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Updaters />
        <ThemeProvider>
          <ThemedGlobalStyle />
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
