import lowmoney from '../../assets/car-money.svg';
import car2 from '../../assets/car2.svg';
import match from '../../assets/match.svg';
import car1 from '../../assets/car1.svg';
import { useNavigate } from 'react-router-dom'; // Add this import
import Button from '../../components/Button';
import Footer from '../../components/Footer';

function Home() {
  const navigate = useNavigate(); // Add this hook

  const handleButtonGetCars = (e) => {
    e.preventDefault();
    navigate('/search-cars'); // This will properly navigate to the /cars route
  };

  const handleButtonPublishCars = (e) => {
    e.preventDefault();
    navigate('/publish-car'); // This will properly navigate to the /cars route
  };

  return (
    <>
      <div className="bg-primary">
        <section
          className="section1 d-flex flex-column vh-100 container pt-5  "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto order-md-1 d-block pt-0">
              <img
                className="w-100 pt-2"
                src={car1}
                alt="Carro 1"
                data-aos="flip-left"
              />
            </div>
          </div>
          <div className="mt-3 pt-3 order-md-2 mx-2">
            {' '}
            <h1 className=" text-white fw-bold">
              liberdade para quem aluga e renda para quem compartilha!
            </h1>
            <h4 className="text-white fw-regular ">
              Precisa de um carro por um dia ou uma semana? Conectamos você ao
              veículo certo!
            </h4>
            <div
              className="d-flex gap-5 justify-content-center my-5 mx-auto"
              style={{ width: '90%' }}
            >
              <Button
                text={'Buscar um carro!'}
                color={'warning'}
                handleClick={handleButtonGetCars}
              ></Button>

              <Button
                text={'Publicar um carro!'}
                color={'warning'}
                handleClick={handleButtonPublishCars}
              ></Button>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-white">
        <section
          className="section2 d-flex flex-column vh-100 container  align-itens-center justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="row">
            <div className="  col-md-6 d-flex flex-column justify-content-center order-md-last">
              {' '}
              <h1 className=" text-dark fw-bold my-4">Alugue de vizinhos!</h1>
              <p className="fs-4 my-4">
                A chave da liberdade está na palma da sua mão: reserve o carro
                que mais combina com você, por quanto tempo quiser!
              </p>
              <div className="d-flex gap-5 ">
                <div className="w-50 align-items-start">
                  <Button
                    text={'Buscar um carro!'}
                    color={'warning'}
                    handleClick={handleButtonGetCars}
                  ></Button>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mx-auto col-md-6 ">
              <img
                className="w-100 pt-5"
                src={car2}
                alt="Carro 1"
                data-aos="flip-left"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="bg-dark d-flex align-items-center justify-content-center vh-100">
        <section
          className="section3 d-flex flex-column  container "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="row ">
            <div className="col-md-6 d-flex justify-content-center mx-auto order-md-1">
              <img
                className="w-75 "
                src={lowmoney}
                alt="Carro 1"
                data-aos="flip-left"
              />
            </div>
            <div className="mt-5 col-md-6 d-flex flex-column justify-content-center">
              {' '}
              <h1 className=" text-white fw-bold my-4">
                Conquiste um extra sem esforço!
              </h1>
              <p className="fs-4 my-4 text-light">
                Deixe seu carro gerar dinheiro para você nos dias que ele fica
                parado.
              </p>
              <div className="d-flex gap-5 ">
                <div className="w-50 align-items-start">
                  <Button
                    text={'Gerar Renda!'}
                    color={'warning'}
                    handleClick={handleButtonPublishCars}
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-primary">
        <section
          className="section4 d-flex flex-column vh-100 container pt-5  "
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto order-md-1">
              <img
                className="w-100 pt-5"
                src={match}
                alt="Carro 1"
                data-aos="flip-left"
              />
            </div>
          </div>
          <div className="mt-3 pt-3 order-md-2">
            {' '}
            <h1 className="text-center  text-white fw-bold">
              A chave da liberdade está na palma da sua mão:
            </h1>
            <h3 className="text-white text-center ">
              Escolha o modelo, compare preços e tenha a liberdade que precisa.
              Alugue fácil e rápido com apenas alguns cliques!
            </h3>
            <div className="d-flex gap-5 justify-content-center">
              <div className="w-50 align-items-start">
                <Button
                  text={'Encontrar um carro perfeito!'}
                  color={'warning'}
                  handleClick={handleButtonPublishCars}
                ></Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
