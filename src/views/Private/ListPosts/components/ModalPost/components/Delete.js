import { useDispatch, useSelector } from 'react-redux'
import { number,func } from 'prop-types'
import { Button, CardActions } from "@material-ui/core"

import { deletePost } from './../../../../../../services/Posts'
import { Loading } from '../../../../../../components/Loading'

export const Delete = ({ idPost, close }) => {
  const { loading } = useSelector(state => state.Posts)
  
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deletePost({ id: idPost }))
    close()
  }
  
  return loading
  ? <Loading /> 
  : (
    <>
      <h6>¿ Esta seguro ?</h6>
      <CardActions>
        <Button 
          color="secondary"
          variant="contained"
          onClick={handleDelete}
        >
          Eliminar
        </Button>
      </CardActions>  
    </>
  )
}

Delete.propTypes = {
  idPost: number.isRequired,
  close: func.isRequired
}