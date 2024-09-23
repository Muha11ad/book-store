import clsx from "clsx"
import { FC } from "react"
import "./validate-input.scss"

export interface IValidateInput{
    readonly errors : any
    readonly register : any
    readonly inputClass ? : string
    readonly wrapperClass ? : string
    readonly type : "name" | "email" | "password"
} 

export const ValidateInput : FC<IValidateInput> = (props) => {
    const { wrapperClass , inputClass , type ,errors, register} = props

  return (
<div className={clsx("validate-input-wrapper", wrapperClass)}>
    <input 
    {...register(type)}
    placeholder={`Enter your ${type}` } 
    type={type === "name" ? "text" : type} 
    className={clsx("validate-input", errors[type] ? "invalid-input" : "" , inputClass)}
    />
    {errors[type] && <p className="validate-input-error">{errors[type]?.message}</p>}
</div>

  )
}
