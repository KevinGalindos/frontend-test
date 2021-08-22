import { useState } from 'react'
import { string } from 'prop-types'

export const useInput = ({ type }) => {
  const [value, setValue] = useState()

  const onChangeInput = e => setValue(e.target.value)
  
  return {
    value,
    type,
    onChangeInput
  }
}

useInput.propTypes = {
  type: string.isRequired
}