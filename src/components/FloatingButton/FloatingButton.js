import { Tooltip, Button } from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { useDispatch } from 'react-redux'

import { logout } from './../../services/Auth'

import './FloatingButton.scss'

export const FloatingButton = () => {
  const dispatch = useDispatch()

  const onClickLogout = () => dispatch(logout())

  return (
    <div className="logout">
      <Tooltip title="Cerrar sesion">
        <Button variant="contained" color="secondary" onClick={onClickLogout}>
          <ExitToApp />
        </Button>
      </Tooltip>
    </div>
  )
}
