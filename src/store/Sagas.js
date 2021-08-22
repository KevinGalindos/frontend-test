import { fork, all } from 'redux-saga/effects'

import PostsSaga from './../services/Posts/PostsSaga'

function* RootSagas(){
  yield all([
    fork(PostsSaga)
  ])
}

export default RootSagas