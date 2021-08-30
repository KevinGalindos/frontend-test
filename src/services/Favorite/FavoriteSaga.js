import { put, takeLatest, all, call } from "redux-saga/effects"

import { DataBaseFireStore } from './../../@common/firebase'
import { COLLECTION_FIREBASE } from './../../@common/environment'
import { 
  addFavorite,
  addFavoriteFailed,
  addFavoriteSuccess,
  getFavorite, 
  getFavoriteFailed, 
  getFavoriteSuccess
} from "."

function* GetFavorite({ type, payload }){
  console.log(payload.id)
  const favorites = yield call (
    () => new Promise((resolve, reject) => {
      DataBaseFireStore.collection(COLLECTION_FIREBASE)
      .get()
      .then(querySnapshot =>{
        console.log(querySnapshot)
        let data = []
        querySnapshot.forEach( doc => { 
          if(doc.data().user === JSON.parse(payload.id)) data.push(doc.data())
        }) 
        return resolve(data)
      })
      .catch(err => 
        resolve({ message: err })
      )
    })
  )
  yield put(favorites.length > 0
    ? getFavoriteSuccess({ message: 'Correcto', favorites: favorites })
  : getFavoriteFailed({ message: 'No se encontraron post'}))
}

function* AddFavorite({ type, payload }){
  const favorites = yield call (
    () => new Promise((resolve, reject) => {
      DataBaseFireStore.collection(COLLECTION_FIREBASE)
      .get()
      .then(querySnapshot => {
        let data = []
        querySnapshot.forEach( doc => { 
          if(doc.data().user === payload.user) data.push(doc.data())
        }) 
        return resolve(data)
      })
      .catch(err => 
        resolve({ message: err })
      )
    })
  )
  let index = favorites.findIndex(i => i.user === payload.user)
  if(!index){
    const favorite = yield call(
      ()=> new Promise( (resolve, reject) => {
        DataBaseFireStore.collection(COLLECTION_FIREBASE)
        .add(payload).then(docRef=>
          resolve({
            ...payload,
            idFirebase: docRef.id,
            message: 'Agregado correctamente'
          })
        )
        .catch( err =>
          resolve({
            message: err
          })
        )
      })
    )
    yield put(favorite.idFirebase
      ? addFavoriteSuccess(favorite)
      : addFavoriteFailed(favorite)
    )
  }else
    yield put(addFavoriteFailed({message: 'ya existe ese post en firestore'}))
}

function* ActionWatcher() {
  yield takeLatest(getFavorite, GetFavorite)
  yield takeLatest(addFavorite, AddFavorite)
}

export default function* FavoriteSaga() {
  yield all([ActionWatcher()]);
}