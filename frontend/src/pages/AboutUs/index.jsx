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
      <div className="container d-flex flex-column align-items-center vh-100 justify-content-center w-100">
        <section className="container text-center d-flex align-items-center flex-column">
          <h1 className="text-center fw-bold fs-1 fw-bolder  text-dark">
            Paixão por Mobilidade e Inovação{' '}
          </h1>
          <h5>
            Nosso time é movido pela paixão em transformar a forma como as
            pessoas se locomovem
          </h5>
          <div className="d-flex align-items-center row">
            <card className="col" data-aos="fade-up" data-aos-duration="1000">
              <img src={eduardo} alt="img-time"></img>
              <Link
                className="btn btn-primary"
                to={'https://www.linkedin.com/'}
              >
                <img
                  style={{ width: '32px', color: '#FFFFFF' }}
                  src="https://img.icons8.com/?size=100&id=85141&format=png&color=ffffff"
                  alt="img-time"
                ></img>
              </Link>
            </card>
            <card className="col" data-aos="fade-up" data-aos-duration="1500">
              <img src={clemeson} alt="img-time"></img>
              <Link
                className="btn btn-primary align-items-center "
                to={'https://www.linkedin.com/'}
              >
                {' '}
                <img
                  style={{ width: '32px', color: '#FFFFFF' }}
                  src="https://img.icons8.com/?size=100&id=85141&format=png&color=ffffff"
                  alt="img-time"
                ></img>
              </Link>
            </card>
            <card className="col" data-aos="fade-up" data-aos-duration="2000">
              <img src={dan} alt="img-time"></img>
              <Link
                className="btn btn-primary"
                to={'https://www.linkedin.com/'}
              >
                <img
                  style={{ width: '32px', color: '#FFFFFF' }}
                  src="https://img.icons8.com/?size=100&id=85141&format=png&color=ffffff"
                  alt="img-time"
                ></img>
              </Link>
            </card>
            <card className="col" data-aos="fade-up" data-aos-duration="2500">
              <img src={vanilson} alt="img-time"></img>
              <Link
                className="btn btn-primary"
                to={'https://www.linkedin.com/'}
              >
                <img
                  style={{ width: '32px', color: '#FFFFFF' }}
                  src="https://img.icons8.com/?size=100&id=85141&format=png&color=ffffff"
                  alt="img-time"
                ></img>
              </Link>
            </card>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
