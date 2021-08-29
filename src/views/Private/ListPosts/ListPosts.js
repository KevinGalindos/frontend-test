import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { CreatePost } from './components/CreatePost'
import { Loading } from './../../../components/Loading'
import { ActionPosts } from './components/ActionPosts'
import { ModalPost } from './components/ModalPost'

import { getPosts } from './../../../services/Posts'

import "./ListPosts.scss"

const ListPosts = ( ) => {
  const dispatch = useDispatch()
  const { uuidUser } = useSelector(state => state.Auth)
  const { loading, postList, message, error } = useSelector(state => state.Posts)

  const [modal, setModal] = useState({
    visible: false,
    action: '',
    id: 0
  })

  useEffect(() => {
    dispatch(getPosts({ id: uuidUser }))
  }, [dispatch, uuidUser])

  const closeModal = () => setModal({
    ...modal,
    visible: false,
    action: '',
    id: 0
  })

  const handleClickModal = ({ action, id }) => () => setModal({
    ...modal, 
    visible: true, 
    action: action,
    id: id
  })

  if(postList.length < 1 || error.deletePost) return <h3>{message.getPosts}</h3>
  
  return loading? <Loading /> : (
   <div> 
     <List>
      {postList.map((post, key)=>(
        <ListItem key={key}>
          <ListItemText 
            key={key}
            primary={post.title}
            secondary={post.link}
          />
          <ActionPosts 
            idPosts={post.id} 
            handleClickModal={handleClickModal}
            close={closeModal}
          />
        </ListItem>
      ))}
    </List>
      <CreatePost />
      <ModalPost 
        id={modal.id}
        visible={modal.visible}
        action={modal.action}
        close={closeModal}
     />
   </div>
  )
}

export default ListPosts