import { useState } from "react";

import Logo from '../../../assets/medium.svg'

import { Visibility, VisibilityOff } from "@material-ui/icons";
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";

import { useInput } from "./../../../hooks/useInput";

import "./Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const username = useInput({ type: "text", min: 4, max: 45 });
  const password = useInput({ type: "password", min: 6, max: 150 });

  return (
    <div className="login">
      <div className="container">
        
        <form className="login-form" noValidate autoComplete="off">
        <div className="login-form-logo">
          <img src= { Logo } alt="LogoWaco" />

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
                type={showPassword ? "text" : password.type}
                value={password.value}
                onChange={password.onChangeInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {password.showPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </div>

          <div className="login_button">
            <Button className="btn-login" variant="contained">
              Ingresar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
