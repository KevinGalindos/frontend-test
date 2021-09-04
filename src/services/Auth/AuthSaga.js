import { put, takeLatest, all, call } from 'redux-saga/effects'

import {
  login,
  logout,
  loginSuccess,
  loginFailed,
  signup,
  signupSuccess,
  signupFailed,
} from './index'
import {
  FirebaseAuth,
  GoogleAuth,
  FacebookAuth,
} from './../../@common/firebase'
import { SaveItem } from './../../@common/storage'

function* Login({ type, payload }) {
  let account
  if (payload?.method) {
    account = yield call(
      () =>
        new Promise((resolve, _) =>
          FirebaseAuth.auth()
            .signInWithPopup(
              payload.method === 'Google' ? GoogleAuth : FacebookAuth
            )
            .then(result =>
              resolve({
                auth: true,
                uuidUser: result.user.uid,
                message: 'Inicio de sesión correcto!.',
                account: result.user.displayName,
              })
            )
            .catch(err =>
              resolve({
                auth: false,
                message: err.message,
              })
            )
        )
    )
    SaveItem(account.auth && { item: account.uuidUser })
    yield put(account.auth ? loginSuccess(account) : loginFailed(account))
  } else {
    account = yield call(
      () =>
        new Promise((resolve, _) =>
          FirebaseAuth.auth()
            .signInWithEmailAndPassword(payload.username, payload.password)
            .then(result =>
              resolve({
                auth: true,
                uuidUser: result.user.uid,
                message: 'Inicio de sesión correcto!.',
                account: payload.username,
              })
            )
            .catch(err =>
              resolve({
                auth: false,
                message: err.message,
              })
            )
        )
    )
    SaveItem(account.auth && { item: account.uuidUser })
    yield put(account.auth ? loginSuccess(account) : loginFailed(account))
  }
}

function* Signup({ type, payload }) {
  let register
  if (payload?.method) {
    register = yield call(
      () =>
        new Promise((resolve, _) =>
          FirebaseAuth.auth()
            .signInWithPopup(
              payload.method === 'Google' ? GoogleAuth : FacebookAuth
            )
            .then(result =>
              resolve({
                success: true,
                message: 'Registro exitoso!.',
              })
            )
            .catch(err =>
              resolve({
                success: false,
                message: err.message,
              })
            )
        )
    )
    yield put(
      register.success ? signupSuccess(register) : signupFailed(register)
    )
  } else {
    register = yield call(
      () =>
        new Promise((resolve, _) =>
          FirebaseAuth.auth()
            .createUserWithEmailAndPassword(payload.username, payload.password)
            .then(result =>
              resolve({
                success: true,
                message: 'Registro exitoso!.',
              })
            )
            .catch(err =>
              resolve({
                success: false,
                message: err.message,
              })
            )
        )
    )
    if (register.success) {
      yield put(signupSuccess(register))
      window.location.href = '/login'
    } else yield put(signupFailed(register))
  }
}

const Logout = () => localStorage.clear()

function* ActionWatcher() {
  yield takeLatest(login, Login)
  yield takeLatest(signup, Signup)
  yield takeLatest(logout, Logout)
}

export default function* AuthSaga() {
  yield all([ActionWatcher()])
}
