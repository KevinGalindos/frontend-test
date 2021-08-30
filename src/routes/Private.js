import { Router, Redirect } from '@reach/router'
import { Suspense, lazy } from 'react'

import { Loading } from '../components/Loading'

const Posts = lazy(()=> import('./../views/Private/Posts'))
const ListPosts = lazy(()=> import('./../views/Private/ListPosts'))
const ListFavoritePosts = lazy(()=> import('./../views/Private/ListFavoritePosts'))

export const Private = () => {
  return (
    <Suspense fallback={
      <Loading />
    }>
      <Router>
        <Posts path="/" />
        <ListPosts path="/list-posts" />
        <ListFavoritePosts path="/list-favorite-posts" />
        <Redirect from="*" to="/" noThrow />
      </Router>
    </Suspense>
  )
}