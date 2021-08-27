import { TextField, TextareaAutosize, Button } from '@material-ui/core'
import { SaveOutlined } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'

import { createPost} from './../../../../../services/Posts'
import { useInput } from './../../../../../hooks/useInput'

import "./CreatePost.scss"

export const CreatePost = () => {
  const title = useInput({ type: 'text', min: 4, max: 45 })
  const body = useInput({ type: 'text', min: 1, max: 240 })
  const { uuidUser } = useSelector(state => state.Auth)

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(createPost({ 
      'title': title.value,
      'body': body.value,
      'user_uuid': JSON.parse(uuidUser)
    }))
  }

  return (
    <div>
      <div>
        <TextField 
          required
          label="Titulo del post" 
          variant="outlined"
          helperText={title.stateInput.message}
          error={title.stateInput.error}
          value={title.value}
          onChange={title.onChangeInput}
          type={title.type}
        />
        <TextareaAutosize 
          required
          minRows={3}
          placeholder="Descripcion del post"
          value={body.value}
          onChange={body.onChangeInput}
          type={body.type}
        />
        <span> {body.stateInput.message} </span>
      </div>
      <div>
        <Button
          variant="contained"
          size="large"
          color="primary"
          startIcon={<SaveOutlined />}
          onClick={handleClick}
        >
          Crear Post
        </Button>
      </div>
    </div>
  )
}