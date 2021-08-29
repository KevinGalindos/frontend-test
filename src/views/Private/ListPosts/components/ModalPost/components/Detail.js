import { 
  Button, 
  CardActionArea,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import { shape, number, string } from 'prop-types'

export const Detail = ({ post }) => {
  return (
    <>
      <CardActionArea>
          <CardContent>
            <Typography 
              gutterBottom 
              component="h5" 
              variant="h5"
            >
              {post.id}  - {post.title}
            </Typography>
            <Typography 
              variant="body2" 
              color="textSecondary" 
              component="span"
            >
              {post.body}
            </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          variant="contained" 
          color="primary"
          size="small"
        >
          <a 
            href={`${post.link}`} 
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none'
            }}
          >
            ver json
          </a>
        </Button>
      </CardActions>    
    </>  
  )
}

Detail.propTypes = {
   post: shape({
    id: number.isRequired,
    title: string.isRequired,
    body: string.isRequired
  })
}