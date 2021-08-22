import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  success: {
    createPost: false,
    getPosts: false,
    updatePost: false,
    deletePost: false
  },
  error: {
    createPost: false,
    getPosts: false,
    updatePost: false,
    deletePost: false
  },
  messageError: {
    createPost: '',
    getPosts: '',
    updatePost: '',
    deletePost: ''
  },
  postList: []
}

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, { payload }) => ({
      ...state
    }),
    createPostSuccess: (state, { payload }) => ({
      ...state
    }),
    createPostFailed: (state, { payload }) => ({
      ...state
    }),

    getPosts: (state, { payload }) => ({
      ...state
    }),
    getPostsSuccess: (state, { payload }) => ({
      ...state
    }),
    getPostsFailed: (state, { payload }) => ({
      ...state
    }),

    updatePost: (state, { payload }) => ({
      ...state
    }),
    updatePostSuccess: (state, { payload }) => ({
      ...state
    }),
    updatePostFailed: (state, { payload }) => ({
      ...state
    }),

    deletePost: (state, { payload }) => ({
      ...state
    }),
    deletePostSuccess: (state, { payload }) => ({
      ...state
    }),
    deletePostFailed: (state, { payload }) => ({
      ...state
    }),
  }
})
