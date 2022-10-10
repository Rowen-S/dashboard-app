import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { updateVersion } from 'state/global/actions'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number

  matchesDarkMode: boolean // whether the dark mode media query matches

  userDarkMode: boolean | null // the user's choice for dark mode or light mode

  timestamp: number
}

export const initialState: UserState = {
  matchesDarkMode: false,
  userDarkMode: null,
  timestamp: currentTimestamp(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserDarkMode: (state, action: PayloadAction<{ userDarkMode: boolean }>) => {
      state.userDarkMode = action.payload.userDarkMode
      state.timestamp = currentTimestamp()
    },
    updateMatchesDarkMode(state, action: PayloadAction<{ matchesDarkMode: boolean }>) {
      state.matchesDarkMode = action.payload.matchesDarkMode
      state.timestamp = currentTimestamp()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateVersion, (state) => {
      state.lastUpdateVersionTimestamp = currentTimestamp()
    })
  },
})

export const { updateMatchesDarkMode, updateUserDarkMode } = userSlice.actions
export default userSlice.reducer
