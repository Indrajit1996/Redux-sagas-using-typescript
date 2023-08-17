import { call, put, takeLatest } from 'redux-saga/effects'
import { USER_FETCH_API } from '../constants'
import {setUserData} from '../actions/account'
import axios from 'axios';
import { ResponseGenerator } from '../constants/interface'

function* getApiData() {
  try {
    console.log('USER_FETCH_API', USER_FETCH_API)
    // TODO set http rules for axios get in order to scale with multiple API calls
    const users : ResponseGenerator = yield call(axios.get, USER_FETCH_API);
    if(users?.status === 200) {
      yield put(setUserData(users?.data))
    }
  } catch (error) {
    console.log('error', error)
  }
}

export default function* account() {
  yield takeLatest('REQUEST_API_DATA', getApiData)
}
