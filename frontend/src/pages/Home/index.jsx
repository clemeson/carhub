import car2 from "../../assets/car2.svg";
import car1 from "../../assets/car1.svg";
import Forms from "../../components/Forms";
import Button from "../../components/Button";

function Home() {
  return (
    <>
      <div className="bg-primary" >
        <section className="section1 d-flex flex-column vh-100 container pt-5  " data-aos="fade-up"   data-aos-duration="1500" >
          <div className="row">
            <div className="col-md-6 d-flex flex-column  pt-5">
              <h1 className=" fw-bold text-white mt-5">
                Facilitamos sua vida
              </h1>
              <h3 className="fw-semibold">
                Conectando Pessoas, Facilitando Mobilidade
              </h3>
              <h5 className="fw-regular">
                Descubra uma nova forma de alugar. Carros compartilhados
                diretamente com proprietários de confiança, sem intermediários.
                Mais acessível, mais próximo, mais prático!
              </h5>
            </div>

            <div className="col-md-6 d-flex justify-content-center mt-5 order-md-1">
              <img className="w-100" src={car1} alt="Carro 1"  data-aos="flip-left"   />
            </div>
          </div>
          <div className="mt-3 pt-3 order-md-2" >
            {" "}
            <Forms />

            <h3 className="text-white text-center pt-3">Escolha o modelo, compare preços e tenha a liberdade que precisa. Alugue fácil e rápido com apenas alguns cliques!</h3>
          </div>
        </section>

        <section className="section2 vh-100 bg-white" >
          <div className="row container mx-auto pt-5" data-aos="fade-right" data-aos-duration="1500" >
            <div className="col-md-6 d-flex flex-column mt-5 pt-5">
              <h1 className=" fw-bold mt-5">Ganhe Dinheiro Extra Com Seu Carro</h1>
              <h3 className="fw-semibold">
              Transforme seu carro em uma fonte de renda
              </h3>
              <h5 className="fw-regular">
              Alugue quando não estiver usando e aproveite para ganhar enquanto compartilha com quem precisa
              </h5>
              <div className="pt-3 d-flex gap-3 alig-items-center justify-content-between me-5">
                <p className="fs-5">Comece a lucrar!</p>
              <Button cor={'primary'} texto={'Publicar seu carro!'}></Button>
              </div>
          
            </div>

            <div className="col-md-6 d-flex justify-content-center mt-5">
              <img src={car2} alt="Carro 2" className="w-100" />
            </div>
          </div>
        </section>

        <section className="section3 vh-100">
          <div className="text-center">
            <h1>Facilitamos sua vida</h1>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
