import { createSlice } from '@reduxjs/toolkit'

import { CheckItem, GetItem } from './../../@common/storage'

export const initialState = {
  authentication: CheckItem(),
  uuidUser: GetItem(),
  loading: false,
  error: false,
  account: '',
  message: '',
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }) => ({
      ...state,
      loading: true,
      message: '',
    }),
    loginSuccess: (state, { payload }) => ({
      ...state,
      loading: false,
      authentication: payload.auth,
      uuidUser: payload.uuidUser,
      message: payload.message,
      error: false,
    }),
    loginFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      authentication: false,
      uuidUser: '',
      message: payload.message,
      error: true,
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
      error: false,
    }),
    signupFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      message: payload.message,
      error: true,
    }),
    logout: state => ({
      ...state,
      uuidUser: '',
      authentication: '',
      error: false,
      message: '',
    }),
  },
})
