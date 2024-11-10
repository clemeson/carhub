import { useEffect, useState } from 'react';
import Button from '../../Button';
import { Fetch } from '../../../service/Fetch';
function FormSignup({ title, subTitle }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
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
        <h2 className="text-center text-dark mb-0">{title}</h2>
        <p className="text-center text-dark ">{subTitle}</p>

        <form>
          <div className="mb-3 input-group-lg">
            <input
              type="email"
              className="form-control bg-light"
              id="email"
              placeholder="Insira seu email!"
            />
          </div>
          <div className="mb-3 input-group-lg">
            <input
              type="Nome"
              className="form-control bg-light"
              id="name"
              placeholder="Insira seu nome completo!"
            />
          </div>
          <div className="mb-3 input-group-lg">
            <input
              type="password"
              className="form-control bg-light"
              id="password"
              placeholder="Insira sua senha!"
            />
          </div>
          <div className="mb-3 input-group-lg">
            <input
              type="password"
              className="form-control bg-light"
              id="passwordRepeat"
              placeholder="Repita sua senha"
            />
          </div>
          <div className=" d-flex justify-content-center d-flex justify-content-end">
            <Button
              color="primary"
              text="Criar Conta"
              handleClick={handleClick}
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
