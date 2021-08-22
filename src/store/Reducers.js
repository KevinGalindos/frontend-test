import { combineReducers } from '@reduxjs/toolkit'

import PostsReducer, { PostsState } from './../services/Posts'

const AppReducer = combineReducers({
  Posts: PostsReducer
})

const RootReducers = (state, action) => {
  if(action.type === 'auth/logout') state = {
    Posts: PostsState
  }
  return AppReducer(state, action)
}

export default RootReducers