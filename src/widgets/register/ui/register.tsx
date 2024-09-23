import "./register.scss"
import { VerifyEmail } from "features/verifyEmail"
import { RegisterForm } from "features/registerForm"
import { useState } from "react"

export const Register = () => {
  
  const [isRegistered , setsIsRegistered] = useState<boolean>(false)

  const content = isRegistered ? <VerifyEmail/>: <RegisterForm setIsRegistered={setsIsRegistered} /> 

  return (
    <div className="regster-wrapper">
      {content}
    </div>
  )
}
