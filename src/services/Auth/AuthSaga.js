import { put, takeLatest, all, call } from "redux-saga/effects";

import { login, logout, loginSuccess, loginFailed } from './index'
import {  FirebaseAuth, GoogleAuth, FacebookAuth } from './../../@common/firebase'

function*  Login({ type, payload }){
  let account
  if(payload?.method){
    account = yield call(() =>
      new Promise( (resolve, _) => 
        FirebaseAuth.auth()
        .signInWithPopup(
          payload.method === 'Google'
          ? GoogleAuth
          : FacebookAuth
        )
        .then(result =>
          resolve({
            auth: true,
            uuidUser: result.user.uid,
            message: 'Inicio de sesión correcto!.',
            account: result.user.displayName
          }) 
        )
        .catch(err =>
          resolve({
            auth: false,
            message: err.message
          })
        )
      )
    )
    yield put(account.auth? loginSuccess(account): loginFailed(account)) 
  }else {
    account = yield call( () => 
      new Promise( (resolve, _ ) => 
        FirebaseAuth.auth()
        .signInWithEmailAndPassword(payload.username, payload.password)
        .then(result =>
          resolve({
            auth: true,
            uuidUser: result.user.uid,
            message: 'Inicio de sesión correcto!.',
            account: payload.username
          })
        )
        .catch(err => 
          resolve({
            auth: false,
            message: err.message
          })
        )
      )
    )
    yield put(account.auth? loginSuccess(account): loginFailed(account)) 
  }
}

function* Signup(){}

const Logout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(login, Login);
  //yield takeLatest(si)
  yield takeLatest(logout, Logout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}