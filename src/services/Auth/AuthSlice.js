import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  authentication: '',
  uuidUser: ''
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => ({
      ...state,
      uuidUser: '',
      authentication: ''
    })
  }
})