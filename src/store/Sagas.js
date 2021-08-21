import { fork, all } from 'redux-saga/effects'

function* RootSagas(){
  yield all([
    fork()
  ])
}

export default RootSagas