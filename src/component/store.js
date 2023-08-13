import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import mainReducer from './reducer/index'
// import mySaga from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = configureStore({
  reducer: mainReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

// then run the saga
// sagaMiddleware.run(mySaga)

// render the application