import Grid from '@material-ui/core/Grid'

import ListPosts from "../ListPosts"
import ListFavoritePosts from "../ListFavoritePosts"

const Posts = () => {
  return (
    <div>
      <Grid 
        container 
        direction="row" 
        justifyContent="center"
        
      >
        <Grid item xs={6}>
          <h2>posts</h2>
          <ListPosts />
        </Grid>
        <Grid item xs={6}>
          <h2>favoritos</h2>
          <ListFavoritePosts />
        </Grid>
      </Grid>
    </div>
  )
}

export default Posts