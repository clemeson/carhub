import React from 'react';
import loginImg from '../../../assets/signup.svg';
import FormSignup from '../../../components/Forms/FormSignup';

function Login() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="row w-100 justify-content-center ">
        <div className="col-12 col-md-6">
          <FormSignup
            title={'Cadastre-se'}
            subTitle={'Crie sua conta e pegue a estrada!'}
          />
        </div>
        <div className="col-6 col-md-6 text-center mb-4 d-none d-sm-flex">
          <img
            style={{
              width: '100%', // Makes the image responsive
              objectFit: 'contain', // Ensures the image maintains its aspect ratio
            }}
            src={loginImg}
            alt="Login Illustration"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
