import clsx from "clsx"
import { FC } from "react"
import { Link } from "react-router-dom"
import "./headerAuthBtns.scss"

interface IHeaderAuthBtns{
  className: string
}

export const HeaderAuthBtns : FC<IHeaderAuthBtns> = (props) => {
  const { className } = props
  return (
    <div className={clsx('auth-btns', className)}>
  <Link to="/auth" className="auth-btn">Register</Link>
  <Link to="/auth" className="auth-btn">Login</Link>
    </div>
  )
}
