import { createSlice } from '@reduxjs/toolkit'

export enum ApplicationModal {
  HOME_SEARCH,
  MENU,
  PROPOSALS_STATUS,
}

export interface ApplicationState {
  readonly openModal: ApplicationModal | null
}

const initialState: ApplicationState = {
  openModal: null,
}

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setOpenModal(state, action) {
      state.openModal = action.payload
    },
  },
})

export const { setOpenModal } = applicationSlice.actions
export default applicationSlice.reducer
