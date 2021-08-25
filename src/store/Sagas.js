import { fork, all } from 'redux-saga/effects'

import PostsSaga from './../services/Posts/PostsSaga'
import AuthSaga from './../services/Auth/AuthSaga'

function* RootSagas(){
  yield all([
    fork(PostsSaga),
    fork(AuthSaga)
  ])
}

export default RootSagas