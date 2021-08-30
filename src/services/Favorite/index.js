import { FavoriteSlice } from './FavoriteSlice'

export const { 
  addFavorite,
  addFavoriteSuccess,
  addFavoriteFailed,
  getFavorite,
  getFavoriteSuccess,
  getFavoriteFailed
} = FavoriteSlice.actions

export { initialState as FavoriteState } from './FavoriteSlice'
export default FavoriteSlice.reducer