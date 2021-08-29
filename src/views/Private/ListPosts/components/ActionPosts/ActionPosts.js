import { IconButton, Tooltip } from '@material-ui/core'
import { Delete, Visibility, Edit, Star } from '@material-ui/icons'
import { number, func } from 'prop-types'

export const ActionPosts = ({ idPosts, handleClickModal }) => {
  return (
    <div>
      <Tooltip title="Ver Post">
        <IconButton 
          aria-label="details" 
          onClick={ 
            handleClickModal({ action: 'detail', id: idPosts }) 
          }
        >
          <Visibility />
        </IconButton>
      </Tooltip>

      <Tooltip title="Editar Post">
        <IconButton 
          aria-label="edit"
          onClick={ 
            handleClickModal({ action: 'update', id: idPosts }) 
          }
        >
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Eliminar Post">
        <IconButton 
          aria-label="delete"
          onClick={ 
            handleClickModal({ action: 'delete', id: idPosts })
           }
        >
          <Delete />
        </IconButton>
      </Tooltip>

      <Tooltip title="Agregar Favorito">
        <IconButton 
          aria-label="favorite"
          onClick={ 
            handleClickModal({ action: 'favorite', id: idPosts }) 
          }
        >
          <Star />
        </IconButton>
      </Tooltip>
    </div>
  )
}

ActionPosts.propTypes = {
  idPosts: number.isRequired,
  handleClickModal: func.isRequired
}