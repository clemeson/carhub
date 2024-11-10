import AnchorLink from '../../AnchorLink';
import { useEffect, useState } from 'react';
import Button from '../../Button';
import { showToast } from '../../../service/ToastService';
function FormLogin({ title, subTitle }) {
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

  const handleToast = (e) => {
    e.preventDefault();
    showToast('success');
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
        <h2 className="text-center text-dark">{title}</h2>
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
              type="password"
              className="form-control bg-light"
              id="password"
              placeholder="Insira sua senha"
            />
          </div>
          <div className=" d-flex justify-content-center d-flex justify-content-end">
            <Button color="warning" text="Entrar" handleClick={''}>
              {' '}
            </Button>
            <button onClick={handleToast}>adas</button>
          </div>{' '}
        </form>

        <div className="text-center mt-3">
          <AnchorLink
            text={'Ainda não tem conta? Cadastre-se!'}
            to={'/auth/signup'}
          ></AnchorLink>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;
