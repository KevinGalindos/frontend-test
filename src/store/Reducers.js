import { combineReducers } from '@reduxjs/toolkit'

import PostsReducer, { PostsState } from './../services/Posts'
import AuthReducer, { AuthState } from './../services/Auth'
import FavoriteReducer, { FavoriteState } from './../services/Favorite'

const AppReducer = combineReducers({
  Posts: PostsReducer,
  Auth: AuthReducer,
  Favorite: FavoriteReducer
})

const RootReducers = (state, action) => {
  if(action.type === 'auth/logout') state = {
    Posts: PostsState,
    Auth: AuthState,
    Favorite: FavoriteState
  }
  return AppReducer(state, action)
}

export default RootReducers