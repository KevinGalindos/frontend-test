import { useState } from 'react'
import { Link } from '@reach/router'
import { useDispatch, useSelector } from 'react-redux'
import { Visibility, VisibilityOff, Facebook } from '@material-ui/icons'
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from '@material-ui/core'

import { useInput } from './../../../hooks/useInput'
import { Navbar } from '../../../components/Navbar'

import { signup } from '../../../services/Auth'

import Logo from '../../../assets/Logo-medium.svg'

import './Signup.scss'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false)
  const username = useInput({ type: 'text', min: 4, max: 45, val: '' })
  const password = useInput({ type: 'password', min: 6, max: 150, val: '' })
  const dispatch = useDispatch()
  const { error, message } = useSelector(state => state.Auth)

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const submitSignup = ({ method }) => {
    if (method) dispatch(signup({ method: method }))
    else
      dispatch(signup({ username: username.value, password: password.value }))
  }

  return (
    <div className="signup">
      <Navbar />
      <div className="container">
        <form className="signup_form" noValidate autoComplete="off">
          <div className="signup_form_logo">
            <Link to="/Home">
              <img src={Logo} alt="LogoWaco" />
            </Link>
          </div>
          <div className="signup_form_username">
            <TextField
              className="texfield-class"
              error={username.stateInput.error}
              id="outlined-error-helper-text"
              label="Email"
              helperText={username.stateInput.message}
              variant="outlined"
              type={username.type}
              onChange={username.onChangeInput}
              value={username.value}
            />
          </div>

          <div className="signup_form_password">
            <FormControl
              className="margin-class texfield-class"
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : password.type}
                value={password.value}
                onChange={password.onChangeInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>

          <div className="signup_button">
            <Button
              className="btn-signup"
              variant="contained"
              onClick={() => submitSignup({})}
            >
              Registrar
            </Button>
          </div>

          <div className="signup_social">
            <Button
              variant="contained"
              onClick={() => submitSignup({ method: 'Facebook' })}
            >
              <Facebook />
            </Button>
            {error && <span>{message}</span>}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
