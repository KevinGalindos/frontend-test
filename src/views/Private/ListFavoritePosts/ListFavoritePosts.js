import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, ListItem, ListItemText } from '@material-ui/core'

import { getFavorite } from './../../../services/Favorite'
import { Loading } from './../../../components/Loading'

import './ListFavoritePosts.scss'

const ListFavoritePosts = ({ id }) => {
  const dispatch = useDispatch()
  const { listPostFB, loading, message, error } = useSelector(
    state => state.Favorite
  )

  useEffect(() => {
    dispatch(getFavorite({ id: id }))
  }, [dispatch, id])

  //if (listPostFB.length < 1 || error.get) return <h3>{message}</h3>

  return loading ? (
    <Loading />
  ) : (
    <div>
      <List>
        {listPostFB.map((post, key) => (
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

export default ListFavoritePosts
