import { Button } from '@material-ui/core'
import { shape, number, string } from 'prop-types'
import { useDispatch } from 'react-redux'

import { addFavorite } from './../../../../../../services/Favorite'

export const Favorite = ({ post, close }) => {
  const dispatch = useDispatch()

  console.log(post)
  const handleAddFavorite = () => {
    dispatch(
      addFavorite({
        ...post,
        user: post.user,
      })
    )
    close()
  } //logic redux
  return <Button onClick={handleAddFavorite}>Favorito</Button>
}

Favorite.propTypes = {
  post: shape({
    id: number.isRequired,
    title: string.isRequired,
    body: string.isRequired,
    link: string.isRequired,
    user: string.isRequired,
  }),
}
