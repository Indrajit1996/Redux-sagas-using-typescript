import account from './account'
import { fork, all } from 'redux-saga/effects'

export default function* rootSaga() {
  // TODO this can be made even better
  yield all([fork(account)])
}