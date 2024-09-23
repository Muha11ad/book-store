import './registerForm.scss';
import { toast } from 'react-toastify';
import { Button } from 'shared/ui/button';
import { FormFields, registerSchema } from '../types';
import { useAppDispatch } from 'shared/lib/store';
import { zodResolver } from '@hookform/resolvers/zod';
import { fetchRegister } from '../model/registerThunk';
import { ValidateInput } from 'shared/ui/validate-input';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { FC } from 'react';

export interface IRegisterForm{
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>
}
export const RegisterForm: FC<IRegisterForm> = (props) => {
  const { setIsRegistered } = props 
  const dispatch = useAppDispatch();
  // react-hook-form
  const { register, handleSubmit, formState: { errors  }} =  useForm<FormFields>({resolver : zodResolver(registerSchema)});

  // submit if every is ok
  const submit: SubmitHandler<FormFields> = async (data) => {
    try {
      toast.success("Registration was successful");
      setIsRegistered(true)
      await dispatch(fetchRegister(data)).unwrap(); 
    } 
    catch (error: any) {
      toast.error("This email is already registered");
    }
  };
  
  // throw error for user 
  const  throwError : SubmitErrorHandler<FormFields> = data =>{
    console.log(data)
    toast.error("Please fix the form errors before submitting.");
  }

  return (
    <>
    <form action="#" className="auth-form" onSubmit={handleSubmit(submit, throwError)}>

    <ValidateInput errors={errors} type="name"  register={register} />
   
    <ValidateInput errors={errors} type="email"   register={register}/>
   
    <ValidateInput errors={errors} type="password"   register={register}/>

    <Button children='Register' type='submit' />
    
    </form>
    </>
  );
};
