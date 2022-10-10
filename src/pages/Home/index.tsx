import { useDarkModeManager } from 'state/user/hooks'

export default function Home() {
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  return (
    <div>
      <button onClick={toggleDarkMode}>{darkMode ? 'Light Theme' : 'Dark Theme'}</button>
    </div>
  )
}
