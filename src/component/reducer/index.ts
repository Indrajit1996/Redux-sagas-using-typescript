import { combineReducers } from 'redux';
import account from './account';

const mainReducer = combineReducers({
  account,
});

export default mainReducer;