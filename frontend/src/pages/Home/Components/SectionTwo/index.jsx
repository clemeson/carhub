import car2 from '../../../assets/car2.svg';

import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

// import { Container } from './styles';

function SectionTwo() {
  const navigate = useNavigate();
  const handleButtonGetCars = (e) => {
    e.preventDefault();
    navigate('/search-cars');
  };

  return (
    <>
      <section
        className="container vh-100 d-flex align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="row align-items-center justify-content-center">
          <h1 className="text-center fw-bolder ">
            Conectamos você ao veículo ideal na sua vizinhança.
          </h1>
          <div className="col-lg-6 order-lg-2 text-center mb-4 mb-lg-0">
            <img
              className="img-fluid"
              src={car2}
              alt="Carro em destaque"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="col-lg-6 text-lg-start text-center">
            <h1 className="text-dark fw-bold mb-3 text-center fw-bolder fs-1">
              Alugue de vizinhos!
            </h1>
            <p className="fs-5 mb-4">
              A chave da liberdade está na palma da sua mão: reserve o carro que
              mais combina com você, por quanto tempo quiser!
            </p>
            <Button
              text="Buscar um carro!"
              color="warning"
              handleClick={handleButtonGetCars}
              icon={<FaStreetView />}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionTwo;
