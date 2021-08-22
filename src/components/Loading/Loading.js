import { string } from 'prop-types'

export const Loading = ({ message }) => {
  return (
    <div>
      {message}
    </div>
  )
}

Loading.propTypes = {
  message: string.isRequired
}

Loading.defaultProps = {
  message: 'Cargando...'
}