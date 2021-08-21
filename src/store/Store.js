import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import SagaMiddleware from 'redux-saga'

import RootReducers from './Reducers'
import RootSagas from './Sagas'

const sagaMiddleware = SagaMiddleware();

const Middlewares = () => {
  let middleware = [sagaMiddleware];
  if(true) middleware = [logger, ...middleware]
  return middleware
}

const Store = configureStore({
  devTools: true,
  middleware: Middlewares,
  reducer: RootReducers
})

sagaMiddleware.run(RootSagas)

export default Store