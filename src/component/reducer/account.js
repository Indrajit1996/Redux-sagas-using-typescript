export const USER_INITIAL_STATE = {
  account_name: 'Indrajit',
  account_number: '123',
  loading: 'false',
};

const Account = (state = USER_INITIAL_STATE, { type, data }) =>  {
  switch(type) {
    case 'REQUEST_API_DATA': {
      return {
        ...state,
        loading: true,
      }
    }
    default: {
      return state;
    }
  }
}

export default Account