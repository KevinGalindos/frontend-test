import { PostsSlice } from './PostsSlice'

export const {
  createPost,
  createPostSuccess,
  createPostFailed,
  getPosts,
  getPostsSuccess,
  getPostsFailed,
  deletePost,
  deletePostSuccess,
  deletePostFailed,
  updatePost,
  updatePostSuccess,
  updatePostFailed
} = PostsSlice.actions

export { initialState as PostsState} from './PostsSlice'

export default PostsSlice.reducer