import { put, takeLatest, all } from "redux-saga/effects";

import { createPost, getPosts, updatePost, deletePost } from './index'

function* CreatePost({ type, payload }){}
function* GetPosts({ type, payload }){}
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