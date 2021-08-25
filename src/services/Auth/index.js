import { AuthSlice } from './AuthSlice'

export const { logout, login, loginSuccess, loginFailed  } = AuthSlice.actions

export { initialState as AuthState } from './AuthSlice'

export default AuthSlice.reducer