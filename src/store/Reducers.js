import { combineReducers } from '@reduxjs/toolkit'

const AppReducer = combineReducers({

})

const RootReducers = (state, action) => {
  if(action.type === 'auth/logout') state = undefined
  return AppReducer(state, action)
}

export default RootReducers