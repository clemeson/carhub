import lowmoney from '../../assets/car-money.svg';
import car2 from '../../assets/car2.svg';
import match from '../../assets/match.svg';
import car1 from '../../assets/car1.svg';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import { FaCommentsDollar } from 'react-icons/fa';
import {
  FaCarSide,
  FaCarOn,
  FaStreetView,
  FaHandshakeAngle,
} from 'react-icons/fa6';

function Home() {
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
      <div className="bg-primary py-5">
        <section
          className="container text-center vh-100"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <img
            className="img-fluid mb-4"
            src={car1}
            alt="Carro destaque"
            style={{ maxWidth: '80%' }}
          />
          <h1 className="text-white fw-bold mb-3">
            Liberdade para quem aluga e renda para quem compartilha!
          </h1>
          <p className="text-white fw-regular mb-4">
            Precisa de um carro por um dia ou uma semana? Conectamos você ao
            veículo certo!
          </p>
          <div className="d-flex gap-3 justify-content-center">
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
      </div>

      <div className="bg-white py-5">
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
                A chave da liberdade está na palma da sua mão: reserve o carro
                que mais combina com você, por quanto tempo quiser!
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
      </div>

      <div className="bg-dark text-white py-5">
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
      </div>

      <div className="bg-primary py-5">
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
          <p className="text-white fw-regular mb-4">
            Escolha o modelo, compare preços e tenha a liberdade que precisa.
            Alugue fácil e rápido com apenas alguns cliques!
          </p>
          <Button
            text="Encontrar um carro perfeito!"
            color="warning"
            handleClick={handleButtonGetCars}
            icon={<FaHandshakeAngle />}
          />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Home;
