import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/lib/store'
import { fetchRegister } from '../model/registerThunk'
import './register.scss'

export const Register = () => {
  const dispatch = useAppDispatch()
  const [userData, setUserData] = useState({
    name : "",
    email : "",
    password : "",
  })
  
  function triggerFetch(){
    dispatch(fetchRegister(userData))
  }
  return (
    <form action='#'>
    <input type="text" placeholder='name' onChange={(e)=> setUserData({...userData , name : e.target.value})}/>
      <input type="email" placeholder='email' onChange={(e)=> setUserData({...userData , email : e.target.value})}/>
      <input type="password"  placeholder='password'onChange={(e)=> setUserData({...userData , password : e.target.value})}/>
      <button onClick={triggerFetch}>Register</button>
    </form>
  )
}
