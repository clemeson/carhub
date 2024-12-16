// import { Container } from './styles';
import clemeson from '../../assets/team/clemeson.png';
import dan from '../../assets/team/dan.png';
import vanilson from '../../assets/team/vanilson.png';
import eduardo from '../../assets/team/eduardo.png';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
function AboutUs() {
  return (
    <>
      <div className="container d-flex flex-column align-items-center  justify-content-center w-100">
        <section className="container text-center d-flex align-items-center row   flex-column pt-5">
          <h1 className="text-center fw-bold fs-1 fw-bolder  text-dark mt-5">
            Paixão por Mobilidade e Inovação{' '}
          </h1>
          <h5>
            Nosso time é movido pela paixão em transformar a forma como as
            pessoas se locomovem
          </h5>

          <div className="d-flex align-items-center row">
            <card
              className="col-md-3"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <img src={clemeson} alt="img-time"></img>
            </card>

            <card
              className="col-md-3"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src={dan} alt="img-time"></img>
            </card>
            <card
              className="col-md-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={eduardo} alt="img-time"></img>
            </card>
            <card
              className="col-md-3 card-body"
              data-aos="fade-up"
              data-aos-duration="2500"
            >
              <img src={vanilson} alt="img-time"></img>
            </card>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
