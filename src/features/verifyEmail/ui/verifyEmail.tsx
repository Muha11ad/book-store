import './verifyEmail.scss'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Timer } from 'shared/ui/timer'
import { Button } from 'shared/ui/button'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'shared/lib/store'
import { verifyCode } from 'features/registerForm/model/registerThunk'

export const VerifyEmail = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [code , setCode] = useState<number>(0)

    async function sendCode(){
        try {
          toast.success("Registration was successful and email verified");
          navigate("/");
          await dispatch(verifyCode({code})).unwrap(); 
          } 
          catch (error: any) {
            console.log(error)
            toast.error("Code was invalid try againg");
          }
    }

  return (
    <form action="#" onSubmit={sendCode} className="verify-form">

      <div className='verify-form__input-wrapper'>

        <input
        type="number" 
        placeholder='Enter code'
        className='verify-form__input'
        onChange={(e)=>{setCode(Number(e.target.value))}} required  />

        <Timer/>
        
      </div>
      
        <Button type="submit" children='Send code'/>

    </form>
  )
}
