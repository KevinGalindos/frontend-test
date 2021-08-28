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
  message: {
    createPost: '',
    getPosts: '',
    updatePost: '',
    deletePost: ''
  },
  loading: false,
  postList: []
}

export const PostsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createPost: (state, { payload }) => ({
      ...state,
      loading: true,
      message: {
        ...state.message,
        createPost: 'creando post'
      },
    }),
    createPostSuccess: (state, { payload }) => ({
      ...state,
      loading: false,
      success: {
        ...state.success,
        createPost: true
      },
      message: {
        ...state.message,
        createPost: payload.message
      },
      postList: [
        ...state.postList,
        { 
          id: payload.id,
          title: payload.title,
          body: payload.body,
          link: payload.link
        }
      ]
    }),
    createPostFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      error: {
        ...state.success,
        createPost: true
      },
      message: {
        ...state.message,
        createPost: payload.message
      },
      success: {
        ...state.success,
        createPost: false
      }
    }),

    getPosts: (state) => ({
      ...state,
      loading: true,
      message: {
        ...state.message,
        createPost: 'Obteniendo posts'
      },
    }),
    getPostsSuccess: (state, { payload }) => ({
      ...state,
      loading: false,
      message: {
        ...state.message,
        getPosts: payload.message
      },
      success: {
        ...state.success,
        getPosts: true
      },
      error: {
        ...state.error,
        getPosts: false
      },
      postList: payload.post
    }),
    getPostsFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      message: {
        ...state.message,
        getPosts: payload.message
      },
      success: {
        ...state.success,
        getPosts: false
      },
      error: {
        ...state.error,
        getPosts: true
      },
    }),

    updatePost: (state, { payload }) => ({
      ...state,
      loading: true,
      message: {
        ...state.message,
        updatePost: 'actualizando post'
      },
    }),
    updatePostSuccess: (state, { payload }) => {
      let newList = state.postList;
      newList[newList.indexOf(payload.post.id)] = payload.post
      return {
        ...state,
        loading: false,
        success: {
          ...state.success,
          updatePost: true
        },
        message: {
          ...state.message,
          updatePost: payload.message
        },
        error: {
          ...state.error,
          updatePost: false
        },
        postList: newList
      }
    },
    updatePostFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      error: {
        ...state.success,
        updatePost: true
      },
      message: {
        ...state.message,
        updatePost: payload.message
      },
      success: {
        ...state.success,
        updatePost: false
      }
    }),

    deletePost: (state, { payload }) => ({
      ...state,
      loading: true,
      message: {
        ...state.message,
        deletePost: 'Eliminando Post'
      }
    }),
    deletePostSuccess: (state, { payload }) => {
      let newList = state.postList;
      newList.splice(newList.indexOf(payload.id), 1)
      return {
        ...state,
        loading: false,
        success: {
          ...state.success,
          deletePost: true
        },
        message: {
          ...state.message,
          deletePost: payload.message
        },
        error: {
          ...state.error,
          deletePost: false
        },
        postList: newList
      }
    },
    deletePostFailed: (state, { payload }) => ({
      ...state,
      loading: false,
      error: {
        ...state.success,
        deletePost: true
      },
      message: {
        ...state.message,
        deletePost: payload.message
      },
      success: {
        ...state.success,
        deletePost: false
      }
    }),
  }
})
