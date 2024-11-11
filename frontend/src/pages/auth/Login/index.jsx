// import { Container } from './styles';
import loginImg from '../../../assets/login.svg';
import FormLogin from '../../../components/Forms/FormLogin';
import { Fetch } from '../../../service/Fetch';
function Login() {
  return (
    <div className="calc-vh-100 d-flex justify-content-center align-items-center flex-column">
      <div className="w-100 d-flex justify-content-center">
        <img
          style={{
            maxWidth: '450px',
          }}
          src={loginImg}
        ></img>
      </div>
      <FormLogin
        title={'Login'}
        subTitle={'Acesse sua conta e continue a jornada!'}
      ></FormLogin>
      ;
    </div>
  );
}

export default Login;
