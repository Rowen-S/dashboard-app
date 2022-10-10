import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'state'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useRootSelector: TypedUseSelectorHook<RootState> = useSelector
