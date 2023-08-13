import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { store } from '../src/component/store';
import { Provider } from "react-redux";
import createSagaMiddleware from '@redux-saga/core';
import mySaga from '../src/component/sagas'
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../src/component/reducer'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: mainReducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(mySaga)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
