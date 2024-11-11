import AnchorLink from '../AnchorLink';
import Button from '../Button';
import logo from '../../assets/brand/Logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const handleButtonLogin = (e) => {
    e.preventDefault();
    navigate('/auth/login'); // This will properly navigate to the /cars route
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg  container">
        <div className="container-fluid justify-content-between d-flex d-flex">
          <a href="/">
            <img className="w-75" src={logo}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav gap-3 w-100 justify-content-end align-items-center">
              <li className="nav-item">
                {' '}
                <AnchorLink text="Dúvidas" to="/questions"></AnchorLink>
              </li>
              <AnchorLink text="" to="/about"></AnchorLink>

              <li className="nav-item">
                {' '}
                <AnchorLink text="Quem Somos" to="/aboutus"></AnchorLink>
              </li>
              <li className="nav-item">
                <Button
                  color={'primary'}
                  text={'Login'}
                  handleClick={handleButtonLogin}
                ></Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
