import { Router, Redirect } from '@reach/router'
import { Suspense, lazy } from 'react'

import { Loading } from './../components/Loading'

const Home = lazy(()=> import("./../views/Public/Home"))
const Login = lazy(()=> import("./../views/Public/Login"))
const Signup = lazy(()=> import("./../views/Public/Signup"))

export const Public = () => {
  return (
    <Suspense fallback={
      <Loading />
    }>
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Signup path="signup" />
        <Redirect from="*" to="/" noThrow />
      </Router>
    </Suspense>
  )
}
