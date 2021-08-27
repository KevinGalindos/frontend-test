import { put, takeLatest, all } from "redux-saga/effects";

import { createPost, getPosts, updatePost, deletePost, createPostSuccess, createPostFailed, getPostsSuccess, getPostsFailed } from './index'
import { POST, GET } from './../../@common/api'

function* CreatePost({ type, payload }){
  const result = yield POST('api/posts', payload);
  if(result.statusText === 'Created')
    yield put(createPostSuccess({
      message: result.statusText,
      ...result.payload.data
    }))
  else 
    yield put(createPostFailed({message: 'No se pudo crear el post'}))
  
}

function* GetPosts({ type, payload }){
  const post = yield GET(`api/users/${payload.id}/post`)
  if(post.statusText === 'OK' && post.payload.data.length > 0)
    yield put(getPostsSuccess({
      message: 'OK, listado obtenido',
      post: post.payload.data
    }))
  else
    yield put(getPostsFailed({
      message: 'No se encontro ningun post'
    }))
}

function* UpdatePost({ type, payload }){}
function* DeletePost({ type, payload }){}

function* ActionWatcher(){
  yield takeLatest(createPost, CreatePost)
  yield takeLatest(getPosts, GetPosts)
  yield takeLatest(updatePost, UpdatePost)
  yield takeLatest(deletePost, DeletePost)
}

export default function* PostsSaga(){
  yield all([ActionWatcher()])
}