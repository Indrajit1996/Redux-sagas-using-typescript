interface AccountInterface {
  account: {
    account_data: Array<any>,
    loading: boolean,
  }
}

interface AccountItem {
  completed: boolean,
  id: number,
  title: string,
  userId: number,
}

interface AccountReducerInterface {
  type: String,
  data: AccountInterface,
}

interface ResponseGenerator{
  config?:any,
  data?: any,
  headers?:any,
  request?:any,
  status?:number,
  statusText?:string
}

export type {
  AccountInterface,
  AccountItem,
  AccountReducerInterface,
  ResponseGenerator,
}
// then run the saga
// sagaMiddleware.run(mySaga)

// render the application