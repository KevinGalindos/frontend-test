import { useState } from 'react'
import { Link } from '@reach/router'
import { useDispatch } from 'react-redux'
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

import Logo from '../../../assets/Logo-medium.svg'
import { useInput } from './../../../hooks/useInput'
import { login } from './../../../services/Auth'

import { Navbar } from '../../../components/Navbar'

import './Login.scss'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const username = useInput({ type: 'text', min: 4, max: 45, val: '' })
  const password = useInput({ type: 'password', min: 6, max: 150, val: '' })
  const dispatch = useDispatch()

  const handleClickShowPassword = () => setShowPassword(!showPassword)

  const submitLogin = ({ method }) => {
    if (method) dispatch(login({ method: method }))
    else dispatch(login({ username: username.value, password: password.value }))
  }

  return (
    <div className="login">
      <Navbar />
      <div className="container">
        <form className="login-form" noValidate autoComplete="off">
          <div className="login-form-logo">
            <Link to="/Home">
              <img src={Logo} alt="LogoWaco" />
            </Link>
          </div>
          <div className="login_form_username">
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

          <div className="login_form_password">
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

          <div className="login_button">
            <Button
              className="btn-login"
              variant="contained"
              onClick={() => submitLogin({})}
            >
              Ingresar
            </Button>

            <Button
              variant="contained"
              onClick={() => submitLogin({ method: 'Facebook' })}
            >
              <Facebook />
            </Button>

            <Button
              variant="contained"
              onClick={() => submitLogin({ method: 'Google' })}
            >
              Google
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
