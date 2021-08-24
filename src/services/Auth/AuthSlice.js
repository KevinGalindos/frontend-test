import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  authentication: '',
  uuidUser: '',
  loading: false,
  account: '',
  message: ''
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      loading: true,
      account: payload.account
    }),
    loginSuccess: (state, { payload }) => ({
      ...state,
      loading: false,
      authentication: payload.auth,
      uuidUser: payload.uuidUser,
      message: payload.message
    }),
    loginFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      authentication: false,
      uuidUser: '',
      message: payload.message
    }),
    logout: (state) => ({
      ...state,
      uuidUser: '',
      authentication: ''
    })
  }
})