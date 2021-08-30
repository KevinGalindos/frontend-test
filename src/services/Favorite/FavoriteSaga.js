import { put, takeLatest, all, call } from "redux-saga/effects";

function* GetFavoritePosts({ type, payload }){}
function* SaveFavoritePost({ type, payload }){}

function* ActionWatcher() {}

export default function* FavoriteSaga() {
  yield all([ActionWatcher()]);
}