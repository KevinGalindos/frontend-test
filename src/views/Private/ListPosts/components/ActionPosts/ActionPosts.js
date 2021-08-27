import { useState } from 'react'
import { IconButton, Tooltip } from '@material-ui/core'
import { Delete, Visibility, Edit } from '@material-ui/icons'
import { number } from 'prop-types'

import { DetailModal } from './../ModalPost'

export const ActionPosts = ({ idPosts }) => {
  const [visibleDetail, setVisibleDetail] = useState(false)
  return (
    <div>
      <Tooltip title="Ver Post">
        <IconButton 
          aria-label="details" 
          onClick = { ()=> setVisibleDetail(true)}
        >
          <Visibility />
        </IconButton>
      </Tooltip>

      <Tooltip title="Editar Post">
        <IconButton aria-label="edit">
          <Edit />
        </IconButton>
      </Tooltip>

      <Tooltip title="Ver Post">
        <IconButton aria-label="delete">
          <Delete />
        </IconButton>
      </Tooltip>
      <DetailModal 
        visible={visibleDetail}
        close={setVisibleDetail}
        id={idPosts}
      />
    </div>
  )
}

ActionPosts.propTypes = {
  idPosts: number.isRequired
}