import { shape, number, string } from 'prop-types'
//import { useDispatch } from 'react-redux'

export const Favorite = () => {
  //const dispatch = useDispatch()
  
  //const addFavorite = () => {} //logic redux
  return (
    <>
      favorite
    </>
  )
}

Favorite.propTypes = {
  post: shape({
    id: number.isRequired,
    title: string.isRequired,
    body: string.isRequired
  })
}