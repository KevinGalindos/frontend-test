import Grid from '@material-ui/core/Grid'
import { useSelector } from 'react-redux'

import ListPosts from '../ListPosts'
import ListFavoritePosts from '../ListFavoritePosts'
import { CreatePost } from './components/CreatePost/CreatePost'
import { FloatingButton } from './../../../components/FloatingButton'

const Posts = () => {
  const { uuidUser } = useSelector(state => state.Auth)
  console.log(uuidUser)
  return (
    <div>
      <FloatingButton />
      <Grid container direction="row" justifyContent="center">
        <Grid item xs={6}>
          <h2>posts</h2>
          <ListPosts id={JSON.stringify(uuidUser)} />
        </Grid>
        <Grid item xs={6}>
          <h2>favoritos</h2>
          <ListFavoritePosts id={JSON.stringify(uuidUser)} />
        </Grid>
      </Grid>
      <Grid container direction="row" justifyContent="center">
        <CreatePost />
      </Grid>
    </div>
  )
}

export default Posts
