import { Card, Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import { Close } from '@material-ui/icons'
import { number, bool, func, string } from 'prop-types'
import { useSelector } from 'react-redux'

import { Delete, Detail, Update, Favorite } from './components'

import "./ModalPost.scss"

export const ModalPost = ({ id, visible, close, action }) => {
  const { postList } = useSelector(state => state.Posts)
  const currentPost = postList.find( post => post.id === id)

  const node = {
    'detail': <Detail post={currentPost} />,
    'update': <Update post={currentPost} close={close} />,
    'delete': <Delete idPost={id} close={close} />,
    'favorite': <Favorite post={currentPost} close={close} />
  }

  const title = {
    'detail': 'Visualizacion del post',
    'update': 'Modificacion del post'
  }

  return (
    <Dialog
      open={visible}
      onClose={()=>close()}
      aria-labelledby="max-width-dialog-title"
      aria-describedby="simple-modal-description"
      maxWidth="lg"
    >
      <div className="close" onClick={()=>close()}>
        <Close /> 
      </div>

      {title[action] && 
        <DialogTitle 
          id="max-width-dialog-title"
          className="title-modal"
        >
          {title[action]}
        </DialogTitle>
      }
      <DialogContent>
        <Card>
          {node[action]}
        </Card>
      </DialogContent>
    </Dialog>
  )
}

ModalPost.propTypes = {
  id: number.isRequired,
  visible: bool.isRequired,
  close: func.isRequired,
  action: string.isRequired
}