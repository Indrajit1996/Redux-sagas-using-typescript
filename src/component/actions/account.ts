import { AccountInterface } from '../constants/interface'

export const getApi = () => ({
  type: 'REQUEST_API_DATA',
})

export const setUserData = (data: AccountInterface) => ({
  type: 'SET_DATA',
  data
})
