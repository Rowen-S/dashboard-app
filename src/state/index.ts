import { configureStore } from '@reduxjs/toolkit'
import { load, save } from 'redux-localstorage-simple'
import { isTestEnv } from 'utils/env'

import application from './application/reducer'
import user from './user/reducer'
import { updateVersion } from './global/actions'

import { proposalsApi } from 'services/graphql/snapshot'
import { ethereumApi } from 'services/ethereum'
import { cmcProApi } from 'services/cmc-pro'

const PERSISTED_KEYS: string[] = ['user']

export const store = configureStore({
  reducer: {
    application,
    user,
    [proposalsApi.reducerPath]: proposalsApi.reducer,
    [ethereumApi.reducerPath]: ethereumApi.reducer,
    [cmcProApi.reducerPath]: cmcProApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true })
      .concat(proposalsApi.middleware)
      .concat(ethereumApi.middleware)
      .concat(cmcProApi.middleware)
      .concat(save({ states: PERSISTED_KEYS, debounce: 1000 })),
  preloadedState: load({ states: PERSISTED_KEYS, disableWarnings: isTestEnv() }),
})

store.dispatch(updateVersion())

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
