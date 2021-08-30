import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { getFavorite } from './../../../services/Favorite'

import "./ListFavoritePosts.scss"

const FavoritePosts = () => {
  const dispatch = useDispatch()
  const { uuidUser } = useSelector(state => state.Auth)
  const { listPostFB, loading, message, error } = useSelector(state => state.Favorite)

  useEffect(() => {
    dispatch(getFavorite({ id: uuidUser }))
  }, [dispatch, uuidUser])

  return (
    <div>
      favorite posts
      <List>
      {listPostFB.map((post, key)=>(
        <ListItem key={key}>
          <ListItemText 
            key={key}
            primary={post.title}
            secondary={post.link}
          />
        </ListItem>
      ))}
    </List>
    </div>
  )
}

export default FavoritePosts