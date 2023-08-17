import React, { useEffect } from 'react'
import { getApi } from '../../actions/account'
import { useSelector, useDispatch } from 'react-redux';
import { AccountInterface, AccountItem } from '../../constants/interface'

const Account = () => {
  const dispatch = useDispatch()
  const userData = useSelector((state: AccountInterface) => state?.account?.account_data)
  const componentMount = () => {
    if(!userData?.length) {
      dispatch(getApi())
    }
  }
  useEffect(componentMount, [])
  console.log('userData', userData)
  const renderData = (data: Array<AccountItem>) => {
    return data.map((value: AccountItem) => {
      return (
        <div key={value?.id}>
          {value?.title}
        </div>
      )
    })
  }
  return (
    <React.Fragment>
      <div>Account</div>
      {
        userData?.length ? renderData(userData) : null
      }
    </React.Fragment>
  )
}

export default Account
