import '@reach/tabs/styles.css'

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import { store } from './state'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'

import UserUpdater from './state/user/updater'

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

serviceWorkerRegistration.unregister()
