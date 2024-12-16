import React from 'react';

// import { Container } from './styles';

function SectionThree() {
  const navigate = useNavigate();

  const handleButtonPublishCars = (e) => {
    e.preventDefault();
    navigate('/publish-car');
  };
  return (
    <>
      <section
        className="container vh-100 d-flex align-items-center justify-content-center"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="row align-items-center">
          <h1 className="text-center fw-bolder">
            Descubra a liberdade e a renda ao seu alcance!
          </h1>
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              className="img-fluid"
              src={lowmoney}
              alt="Ganhe dinheiro com seu carro"
              style={{ width: '400px', maxHeight: '400px' }}
            />
          </div>
          <div className="col-lg-6 text-lg-start text-center">
            <h1 className="fw-bold mb-3">Conquiste um extra sem esforço!</h1>
            <p className="fs-5 mb-4">
              Deixe seu carro gerar dinheiro para você nos dias que ele fica
              parado.
            </p>
            <Button
              text="Gerar Renda!"
              color="warning"
              handleClick={handleButtonPublishCars}
              icon={<FaCommentsDollar />}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default SectionThree;
