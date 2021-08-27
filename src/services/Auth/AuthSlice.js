import { createSlice } from '@reduxjs/toolkit'

import { CheckItem, GetItem } from './../../@common/storage'

export const initialState = {
  authentication: CheckItem(),
  uuidUser: GetItem(),
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
      message: ''
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
    signup: (state, { payload }) => ({
      ...state,
      loading: true,
      message: '',
    }),
    signupSuccess: (state, { payload }) => ({
      ...state,
      loading: false,
      message: payload.message,
    }),
    signupFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      message: payload.message
    }),
    logout: (state) => ({
      ...state,
      uuidUser: '',
      authentication: ''
    })
  }
})