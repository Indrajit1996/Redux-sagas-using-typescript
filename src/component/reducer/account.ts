import { AccountReducerInterface } from '../constants/interface'

export const USER_INITIAL_STATE = {
  account_data: [],
  loading: 'false',
};

const Account = (state = USER_INITIAL_STATE, { type, data } : AccountReducerInterface) =>  {
  switch(type) {
    case 'REQUEST_API_DATA': {
      return {
        ...state,
        loading: true,
      }
    }
    case 'SET_DATA': {
      return {
        ...state,
        loading: false,
        account_data: data,
      }
    }
    default: {
      return state;
    }
  }
}

export default Account