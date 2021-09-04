import { put, takeLatest, all, call } from 'redux-saga/effects'

import { DataBaseFireStore } from './../../@common/firebase'
import { COLLECTION_FIREBASE } from './../../@common/environment'
import {
  addFavorite,
  addFavoriteFailed,
  addFavoriteSuccess,
  getFavorite,
  getFavoriteFailed,
  getFavoriteSuccess,
} from '.'

function* GetFavorite({ type, payload }) {
  console.log(payload.id)
  const myObject = yield call(
    () =>
      new Promise((resolve, reject) => {
        let data = []
        DataBaseFireStore.collection(COLLECTION_FIREBASE)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              data = [...data, doc.data()]
            })
            return resolve(data)
          })
          .catch(err => resolve({ message: err }))
      })
  )
  const favorites = myObject.filter(
    item => JSON.stringify(`${item.user}`) === payload.id
  )
  console.log(favorites)
  yield put(
    favorites
      ? getFavoriteSuccess({ message: 'Correcto', favorites: favorites })
      : getFavoriteFailed({ message: 'No se encontraron post' })
  )
}

function* AddFavorite({ type, payload }) {
  const favorites = yield call(
    () =>
      new Promise((resolve, reject) => {
        DataBaseFireStore.collection(COLLECTION_FIREBASE)
          .get()
          .then(querySnapshot => {
            let data = []
            querySnapshot.forEach(doc => {
              if (doc.data().user === payload.user) data.push(doc.data())
            })
            return resolve(data)
          })
          .catch(err => resolve({ message: err }))
      })
  )
  let index = favorites.findIndex(i => i.user === payload.user)
  if (!index) {
    const favorite = yield call(
      () =>
        new Promise((resolve, reject) => {
          DataBaseFireStore.collection(COLLECTION_FIREBASE)
            .add(payload)
            .then(docRef =>
              resolve({
                ...payload,
                idFirebase: docRef.id,
                message: 'Agregado correctamente',
              })
            )
            .catch(err =>
              resolve({
                message: err,
              })
            )
        })
    )
    yield put(
      favorite.idFirebase
        ? addFavoriteSuccess(favorite)
        : addFavoriteFailed(favorite)
    )
  } else
    yield put(addFavoriteFailed({ message: 'ya existe ese post en firestore' }))
}

function* ActionWatcher() {
  yield takeLatest(getFavorite, GetFavorite)
  yield takeLatest(addFavorite, AddFavorite)
}

export default function* FavoriteSaga() {
  yield all([ActionWatcher()])
}
