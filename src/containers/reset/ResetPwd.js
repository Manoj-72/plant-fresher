import React from 'react'
import { Login } from '../../components'

const ResetPwd = () => {
  return (
    <div className='loginpage-pg'>
        <Login title='Reset password' newpwd='New password' confirmpwd='Confirm password' button='Reset Password' />
    </div>
  )
}

export default ResetPwd