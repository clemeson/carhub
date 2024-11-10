import React from 'react';
// import { Container } from './styles';
import loginImg from '../../../assets/signup.svg';

import FormSignup from '../../../components/Forms/FormSignup';
function Login() {
  return (
    <div className="calc-vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className="w-100 d-flex justify-content-center">
        <img
          style={{
            maxHeight: '280px',
          }}
          src={loginImg}
        ></img>
      </div>
      <FormSignup
        title={'Cadastre-se'}
        subTitle={'Crie sua conta e pegue a estrada!'}
      ></FormSignup>
      ;
    </div>
  );
}

export default Login;
