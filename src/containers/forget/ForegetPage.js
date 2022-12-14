import React from 'react'
import { Login } from '../../components'
import './Forget.css'

const ForegetPage = () => {
  return (
    <div className='loginpage-pg'>
        <Login title='Forget password' para='No worries,we’ll send you
verification code' placeholder="Mobile no" button='Get OTP' />
    </div>
  )
}

export default ForegetPage