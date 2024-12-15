import { useEffect, useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';
import Button from '../../Button';
import { Fetch } from '../../../service/Fetch';
import InputComponent from '../../InputComponent';

function FormSignup({ title, subTitle, textButton, handleButton }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [data, setData] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    Fetch(setData);
  };

  return (
    <div className="d-flex justify-content-center ">
      <div
        style={{
          width: screenWidth * 0.9, // 80% da largura da tela
          // Altura da tela menos 100px

          maxWidth: '500px',
          maxHeight: '600px',
        }}
      >
        <h2 className="text-center text-dark mb-0 fw-bold">{title}</h2>
        <p className="text-center text-dark ">{subTitle}</p>

        <form>
          <div className=" input-group-lg">
            <InputComponent
              type={'text'}
              placeholder={'Seu nome'}
            ></InputComponent>
          </div>
          <div className=" input-group-lg">
            <InputComponent
              type={'text'}
              placeholder={'Email'}
            ></InputComponent>
          </div>
          <div className=" input-group-lg">
            <InputComponent
              type={'phone'}
              placeholder={'Contato'}
            ></InputComponent>
          </div>
          <div className=" input-group-lg">
            <InputComponent
              type={'password'}
              placeholder={'Senha'}
            ></InputComponent>
          </div>
          <div className=" input-group-lg">
            <InputComponent
              type={'password'}
              placeholder={'Repita a senha'}
            ></InputComponent>
          </div>
          <div className=" input-group-lg">
            <InputComponent
              type={'text'}
              placeholder={'Estado'}
            ></InputComponent>
          </div>
          <div className=" input-group-lg">
            <InputComponent
              type={'text'}
              placeholder={'Cidade'}
            ></InputComponent>
          </div>
          <div className=" d-flex justify-content-center d-flex justify-content-end">
            <Button
              color="primary"
              text="Criar Conta"
              handleClick={handleButton}
              icon={<IoMdLogIn />}
            >
              {' '}
            </Button>
          </div>{' '}
        </form>

        <div className="text-center mt-3"></div>
      </div>
    </div>
  );
}

export default FormSignup;
