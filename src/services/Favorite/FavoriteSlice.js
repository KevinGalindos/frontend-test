import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  success: {
    add: false,
    get: false
  },
  error: {
    add: false,
    get: false
  },
  message: '',
  listPostFB: []
}

export const FavoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: ( state ) => ({
      ...state,
      loading: true,
      message: 'Agregando a favorito'
    }),
    addFavoriteSuccess: ( state, { payload } ) => ({
      ...state,
      loading: false,
      success: {
        ...state.success,
        add: true
      },
      message: payload.message,
      listPostFB: [...state.listPostFB, {
        id: payload.id,
        title: payload.title,
        body: payload.body,
        uuidUser: payload.uuidUser
      }]
    }),
    addFavoriteFailed: ( state, { payload } ) => ({
      ...state,
      loading: false,
      error: {
        ...state.error,
        add: true
      },
      message: payload.message,
      success: {
        ...state.success,
        add: false
      }
    }),

    getFavorite: ( state ) => ({
      ...state,
      loading: true,
      message: 'obteniendo sus posts favoritos'
    }),
    getFavoriteSuccess: ( state, { payload } ) => ({
      ...state,
      loading: false,
      success: {
        ...state.success,
        get: true
      },
      message: payload.message,
      listPostFB: payload.favorites
    }),
    getFavoriteFailed: ( state, { payload } ) => ({
      ...state,
      loading: false,
      error: {
        ...state.success,
        get: true
      },
      message: payload.message
    })
  }
})