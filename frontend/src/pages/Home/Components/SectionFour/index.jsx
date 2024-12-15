import React from 'react';

// import { Container } from './styles';

function SectionFour() {
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
    <>
      <section
        className="container text-center vh-100 d-flex align-items-center flex-column"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <h1 className="text-center fw-bolder  text-white">
          Faça sua escolha com poucos cliques e aproveite sua liberdade.
        </h1>
        <img
          className="img-fluid mb-4"
          src={match}
          alt="Carro perfeito para você"
          style={{ maxWidth: '80%' }}
        />
        <h1 className="text-white fw-bold mb-3">
          A chave da liberdade está na palma da sua mão:
        </h1>
        <h4 className="text-white fw-regular mb-4">
          Escolha o modelo, compare preços e tenha a liberdade que precisa.
          Alugue fácil e rápido com apenas alguns cliques!
        </h4>
        <Button
          text="Encontrar um carro perfeito!"
          color="warning"
          handleClick={handleButtonGetCars}
          icon={<FaHandshakeAngle />}
        />
      </section>
    </>
  );
}

export default SectionFour;
