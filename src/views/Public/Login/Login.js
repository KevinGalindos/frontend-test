import { useInput } from './../../../hooks/useInput'

import "./Login.scss"

const Login = () => {
  const username = useInput({ type: 'text', min: 4, max: 45 })
  const password = useInput({ type: 'password', min: 6, max: 150 })

  return (
    <div>
      <div>
        <label htmlFor="username">Nombre de usuario</label>
        <input 
          type={username.type} 
          onChange={username.onChangeInput}
          value={username.value}
        />
        <span>{username.stateInput.message}</span>
      </div>

      <div>
        <label htmlFor="username">Contrasena</label>
        <input 
          type={password.type} 
          onChange={password.onChangeInput}
          value={password.value}
        />
        <span>{password.stateInput.message}</span>
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login