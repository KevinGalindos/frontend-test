import { fork, all } from 'redux-saga/effects'

import PostsSaga from './../services/Posts/PostsSaga'
import AuthSaga from './../services/Auth/AuthSaga'
import FavoriteSaga from './../services/Favorite/FavoriteSaga'

function* RootSagas(){
  yield all([
    fork(PostsSaga),
    fork(AuthSaga),
    fork(FavoriteSaga),
  ])
}

export default RootSagas