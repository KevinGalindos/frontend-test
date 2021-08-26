import { CreatePost } from './components/CreatePost'
import { GetPosts } from './components/GetPosts'
import { UpdatePosts } from './components/UpdatePosts'
import { DeletePost } from './components/DeletePost'

import "./ListPosts.scss"

const Posts = ( ) => {
 return (
   <div>
     Lists posts
     <CreatePost />
   </div>
  )
}

export default Posts