import './auth.scss';
import { Register } from 'widgets/register';
import { useState } from 'react';
import { Login } from 'features/login/ui/login';

export const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
 
  function changeFormContent() {
    setIsLogin((prevState) => !prevState);
  }

  const formContent = isLogin ? <Login /> : <Register />;
  const buttonContent = isLogin ? "Don't have an account?" : "Already have an account?";

  return (
    <div className='_container auth__wrapper'>
      {formContent}
      <button onClick={changeFormContent} className='auth__btn'>
        <span className='auth__btn-content'>
          {buttonContent}
        </span>
      </button>
    </div>
  );
};
