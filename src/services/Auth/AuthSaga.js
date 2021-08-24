import { put, takeLatest, all } from "redux-saga/effects";
import { logout } from './index'

const Logout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(logout, Logout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}