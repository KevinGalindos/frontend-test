import { 
  Button, 
  CardActionArea,
  CardActions,
  CardContent,
  TextField,
  TextareaAutosize
} from '@material-ui/core'
import { Save } from '@material-ui/icons'
import { number, shape, string, func } from 'prop-types'
import { useDispatch } from 'react-redux'

import { updatePost } from './../../../../../../services/Posts'
import { useInput } from './../../../../../../hooks/useInput'

export const Update = ({ post, close }) => {
  
  const dispatch = useDispatch()
  const title = useInput({ type: 'text', min: 4, max: 45, val: post.title })
  const body = useInput({ type: 'text', min: 1, max: 240, val: post.body })

  const handleClickUpdate = () => {
    dispatch(updatePost({
      title: title.value,
      body: body.value,
      id: post.id
    }))
    close()
  }

  return (
    <>
      <CardActionArea>
        <CardContent>
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
        </CardContent> 
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          size="large"
          color="primary"
          startIcon={<Save/>}
          onClick={handleClickUpdate}
        >
          Actualizar Post
        </Button>
      </CardActions>
    </>
  )
}

Update.propTypes = {
  post: shape({
    id: number.isRequired,
    title: string.isRequired,
    body: string.isRequired
  }),
  close: func.isRequired
}