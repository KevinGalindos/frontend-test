import { combineReducers } from '@reduxjs/toolkit'

import PostsReducer, { PostsState } from './../services/Posts'
import AuthReducer, { AuthState } from './../services/Auth'

const AppReducer = combineReducers({
  Posts: PostsReducer,
  Auth: AuthReducer
})

const RootReducers = (state, action) => {
  if(action.type === 'auth/logout') state = {
    Posts: PostsState,
    Auth: AuthState
  }
  return AppReducer(state, action)
}

export default RootReducers