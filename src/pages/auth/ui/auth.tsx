import { Register } from 'features/register'
import { useState } from 'react'
import './auth.scss'

export const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false)
  
  function changeFormContent(){setIsLogin(!isLogin)}

  const formContent = isLogin ? "" : <Register/>
  const buttonContent = isLogin ? "Do not have an account?" : "Already have account?"
  
  return (
    <div className='_container'>
      {formContent}
      <button onClick={changeFormContent}>{buttonContent}</button>
    </div>
  )
}
