import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { getPosts } from './../../../services/Posts'

import { CreatePost } from './components/CreatePost'
//import { UpdatePosts } from './components/UpdatePosts'

import { Loading } from './../../../components/Loading'
import { ActionPosts } from './components/ActionPosts'

import "./ListPosts.scss"

const Posts = ( ) => {
  const dispatch = useDispatch()

  const { uuidUser } = useSelector(state => state.Auth)
  
  useEffect(() => {
    dispatch(getPosts({ id: uuidUser }))
  }, [dispatch, uuidUser])

  const { loading, postList, message, error } = useSelector(state => state.Posts)

  if(postList.length < 1 || error.getPosts)
  return <h3>{message.getPosts}</h3>
  
  return loading? <Loading /> : (
   <div>
     <CreatePost />
     <List>
      {postList.map((post, key)=>(
        <ListItem key={key}>
          <ListItemText 
            key={key}
            primary={post.title}
            secondary={post.link}
          />
          <ActionPosts idPosts={post.id}/>
        </ListItem>
      ))}
     </List>
   </div>
  )
}

export default Posts