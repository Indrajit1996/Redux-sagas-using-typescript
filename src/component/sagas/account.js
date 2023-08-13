import { call, put, takeEvery, fork, takeLatest } from 'redux-saga/effects'

function* getApiData(action) {
  console.log('action', action)
}

export default function* account() {
  yield takeLatest('REQUEST_API_DATA', getApiData)
}
