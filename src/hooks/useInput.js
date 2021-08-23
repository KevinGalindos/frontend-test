import { useState } from 'react'
import { string, number } from 'prop-types'

export const useInput = ({ type, min, max }) => {
  const [value, setValue] = useState('')

  const [stateInput, setStateInput] = useState({
    message: '',
    error: false
  })

  const onChangeInput = e => {
    setValue(e.target.value)
    
    if(e.target.value.length < min)
    setStateInput({
        ...stateInput,
        message: `No cumple la longitud minima (${min})`,
        error: true
      })
    else if (e.target.value.length > max)
    setStateInput({
        ...stateInput,
        message: `Sobrepaso la longitud maxima (${max})`,
        error: true
      })  
    else 
    setStateInput({
        ...stateInput,
        message: '✔️',
        error: false
    })      
  }
  
  return {
    value,
    type,
    stateInput,
    onChangeInput
  }
}

useInput.propTypes = {
  type: string.isRequired,
  min: number,
  max: number
}