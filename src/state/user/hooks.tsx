import { useCallback } from 'react'
import { useAppDispatch, useRootSelector } from 'state/hooks'
import { shallowEqual } from 'react-redux'
import { updateUserDarkMode } from './reducer'

export function useIsDarkMode(): boolean {
  const { userDarkMode, matchesDarkMode } = useRootSelector(
    ({ user: { matchesDarkMode, userDarkMode } }) => ({
      userDarkMode,
      matchesDarkMode,
    }),
    shallowEqual
  )

  return userDarkMode === null ? matchesDarkMode : userDarkMode
}

export function useDarkModeManager(): [boolean, () => void] {
  const dispatch = useAppDispatch()
  const darkMode = useIsDarkMode()

  const toggleSetDarkMode = useCallback(() => {
    dispatch(updateUserDarkMode({ userDarkMode: !darkMode }))
  }, [darkMode, dispatch])

  return [darkMode, toggleSetDarkMode]
}
