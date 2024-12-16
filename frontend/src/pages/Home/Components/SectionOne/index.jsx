import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/Button';

import { FaCarOn, FaCarSide } from 'react-icons/fa6';
import AnimatedImage from '../AnimateCar';
function SectionOne() {
  const navigate = useNavigate();

  const handleButtonGetCars = (e) => {
    e.preventDefault();
    navigate('/search-cars');
  };

  const handleButtonPublishCars = (e) => {
    e.preventDefault();
    navigate('/publish-car');
  };

  return (
    <section className=" section1 text-center vh-100 d-flex flex-column justify-content-center">
      <div className="row mx-auto w-100 align-items-center">
        <div className="col-12 col-md-12 mb-4">
          <AnimatedImage></AnimatedImage>
        </div>
        <div className="col-12 col-md-12 mb-4">
          <h1 className="text-dark fw-bold mb-3">
            Liberdade para quem aluga e renda para quem compartilha!
          </h1>
          <h3 className="text-dark mb-4">
            Precisa de um carro por um dia ou uma semana? Conectamos você ao
            veículo certo!
          </h3>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row gap-3 justify-content-center container">
        <Button
          text="Buscar um carro!"
          color="warning"
          handleClick={handleButtonGetCars}
          icon={<FaCarSide />}
        />
        <Button
          text="Publicar um carro!"
          color="warning"
          handleClick={handleButtonPublishCars}
          icon={<FaCarOn />}
        />
      </div>
    </section>
  );
}

export default SectionOne;
