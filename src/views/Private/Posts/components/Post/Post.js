import { string } from 'prop-types'

import "./Post.scss"

export const Post = ({ id, title, body }) => {
  return (
    <div>
        <label>{id}</label>
        <label>{title}</label>
        <label>{body}</label>
    </div>
  )
}

Post.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  body: string.isRequired
}
