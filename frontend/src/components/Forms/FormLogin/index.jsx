import AnchorLink from '../../AnchorLink';
import { useEffect, useState } from 'react';
import Button from '../../Button';
import { showToast } from '../../../service/ToastService';
import InputComponent from '../../InputComponent';
import { Fetch } from '../../../service/Fetch';
function FormLogin({ title, subTitle }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  const [email, setEmail] = useState('');
  const [password, setPasswrod] = useState('');
  const [emailValidate, setEmailValidated] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputEmail = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    // Validação de email usando regex
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(emailValue)) {
      setEmailValidated(false);
    } else {
      setEmailValidated(true);
    }
  };

  const handleInputPassword = (e) => {
    //
    setPasswrod(e.target.value);
  };

  const handleFetch = (e) => {
    e.preventDefault();

    if (emailValidate == true) {
      Fetch('/auth/login', { email: email, password: password });
    } else {
      showToast('error', 'Insira um email válido!');
    }
  };

  return (
    <div className="d-flex justify-content-center ">
      <div
        style={{
          width: screenWidth * 0.9, // 80% da largura da tela
          maxWidth: '500px',
          maxHeight: '600px',
        }}
      >
        <h2 className="text-center text-dark fw-bold">{title}</h2>
        <p className="text-center text-dark ">{subTitle}</p>
        <form>
          <InputComponent
            type="email"
            label="Email"
            placeholder="Insira seu email!"
            handleChange={handleInputEmail}
          />
          <InputComponent
            type="password"
            label="Senha"
            placeholder="Insira sua senha"
            handleChange={handleInputPassword}
          />
          <div className=" d-flex justify-content-center d-flex justify-content-end">
            <Button color="warning" text="Entrar" handleClick={handleFetch} />
          </div>
        </form>
        <div className="text-center mt-3">
          <AnchorLink
            text={'Ainda não tem conta? Cadastre-se!'}
            to={'/auth/signup'}
          />
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
