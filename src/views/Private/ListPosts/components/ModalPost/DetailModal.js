import Modal from '@material-ui/core/Modal'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'

export const DetailModal = ({ id, visible, close }) => {
  const { postList } = useSelector(state => state.Posts)
  const currentPost = postList.find( post => post.id === id)
  
  return (
    <Modal
      open={visible}
      onClose={()=> close(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}

    >
      <Card >
        <CardActionArea>
          <CardContent>
            <Typography 
              gutterBottom 
              component="h5" 
              variant="h5"
            >
              {currentPost.id} ) - {currentPost.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              component="span"
            >
              {currentPost.body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button 
            variant="contained" 
            color="primary"
          >
            <a 
              href={`${currentPost.link}`} 
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none'
              }}
            >
              Visitar
            </a>
          </Button>
        </CardActions>
      </Card>
      
    </Modal>
  )
}