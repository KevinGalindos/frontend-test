import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'

import ListPosts from '../ListPosts'
import ListFavoritePosts from '../ListFavoritePosts'

const Posts = () => {
  const { uuidUser } = useSelector(state => state.Auth)
  return (
    <div>
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={6}>
          <h2>posts</h2>
          <ListPosts id={uuidUser} />
        </Grid>
        <Grid item xs={6}>
          <h2>favoritos</h2>
          <ListFavoritePosts id={uuidUser} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Posts
