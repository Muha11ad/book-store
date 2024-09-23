import './login.scss';
import { toast } from 'react-toastify';
import { Button } from 'shared/ui/button';
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../model/loginThunk';
import { useAppDispatch } from 'shared/lib/store';
import { FormLogin, loginSchema } from '../types';
import { zodResolver } from '@hookform/resolvers/zod';
import { ValidateInput } from 'shared/ui/validate-input';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

export const Login = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // react-hook-form
  const { register, handleSubmit, formState: { errors  }} =  useForm<FormLogin>({resolver : zodResolver(loginSchema)});

  // submit if every is ok
  const submit: SubmitHandler<FormLogin> = async (data) => {
    try {
      await dispatch(fetchLogin(data)).unwrap(); 
      toast.success("Login was successful");
      navigate("/");
    } 
    catch (error: any) {
      toast.error("Make sure that you have an account");
    }
  };
  
  // throw error for user 
  const  throwError : SubmitErrorHandler<FormLogin> = data =>{
    console.log(data)
    toast.error("Please fix the form errors before submitting.");
  }

  return (
    <form action="#" className="auth-form" onSubmit={handleSubmit(submit, throwError)}>

    <ValidateInput errors={errors} type="email"   register={register}/>
   
    <ValidateInput errors={errors} type="password"   register={register}/>

    <Button children='Login' type='submit' />
    
    </form>
  );
};
