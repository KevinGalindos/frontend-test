import { useInput } from './../../../hooks/useInput'

import "./Login.scss"

const Login = () => {
  const username = useInput({ type: 'text' })
  const password = useInput({ type: 'password'})

  return (
    <div>
      <div>
        <label htmlFor="username">Nombre de usuario</label>
        <input 
          type={username.type} 
          onChange={username.onChangeInput}
          value={username.value}
        />
      </div>

      <div>
        <label htmlFor="username">Contrasena</label>
        <input 
          type={password.type} 
          onChange={password.onChangeInput}
          value={password.value}
        />
      </div>

      <div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login