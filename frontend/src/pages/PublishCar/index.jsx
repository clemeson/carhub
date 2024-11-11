import constru from '../../assets/constructor.svg';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
// import { Container } from './styles';

function PublishCar() {
  const navigate = useNavigate();
  const handleButton = (e) => {
    e.preventDefault();

    navigate('/');
  };
  return (
    <>
      <div className="container d-flex flex-column justify-content-center w-100">
        <img
          style={{ maxWidth: '600px' }}
          className="w-100 mx-auto"
          src={constru}
        ></img>
        <h1 className="fw-bold mx-auto">Esta pagina está em construção...</h1>
        <div className="w-50 mx-auto">
          <Button
            color={'primary'}
            text={'Voltar para Home'}
            handleClick={handleButton}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default PublishCar;
