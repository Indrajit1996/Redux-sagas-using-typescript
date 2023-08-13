import { combineReducers } from 'redux';
import account from './account.js';

const mainReducer = combineReducers({
  account,
});

export default mainReducer;