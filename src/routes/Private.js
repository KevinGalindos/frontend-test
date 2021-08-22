import { Router, Redirect } from '@reach/router'
import { Suspense, lazy } from 'react'

import { Loading } from '../components/Loading'

const Posts = lazy(()=> import('./../views/Private/Posts'))

export const Private = () => {
  return (
    <Suspense fallback={
      <Loading message="Cargando contenido"/>
    }>
      <Router>
        <Posts path="/" />
        <Redirect from="*" to="/" noThrow />
      </Router>
    </Suspense>
  )
}