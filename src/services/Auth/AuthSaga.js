import { put, takeLatest, all } from "redux-saga/effects";

import { login, logout } from './index'

function* Login(){}

const Logout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(login, Login);
  yield takeLatest(logout, Logout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}