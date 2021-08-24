import { AuthSlice } from './AuthSlice'

export const { logout } = AuthSlice.actions

export { initialState as AuthState } from './AuthSlice'

export default AuthSlice.reducer