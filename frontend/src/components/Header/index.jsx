import React, { useState } from 'react';
import AnchorLink from '../AnchorLink';
import Button from '../Button';
import logo from '../../assets/brand/Logo.png';
import { useNavigate } from 'react-router-dom';
import { MdOutlineMenu, MdClose } from 'react-icons/md'; // Import close icon

function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to manage menu visibility

  const handleButtonLogin = (e) => {
    e.preventDefault();
    navigate('/auth/login');
    closeMenu(); // Close the menu when navigating
  };

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid justify-content-between d-flex">
          <a href="/">
            <img className="w-75" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <MdClose size={30} color="black" /> // Show close icon when open
            ) : (
              <MdOutlineMenu size={30} color="black" /> // Show hamburger icon when closed
            )}
          </button>

          <div
            className={`navbar-collapse ${isOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav gap-3 w-100 justify-content-center align-items-center">
              <li className="nav-item">
                <AnchorLink
                  text="Dúvidas"
                  to="/questions"
                  onClick={closeMenu}
                />
              </li>
              <li className="nav-item">
                <AnchorLink
                  text="Quem Somos"
                  to="/aboutus"
                  onClick={closeMenu}
                />
              </li>
              <li className="nav-item">
                <Button
                  color={'primary'}
                  text={'Login'}
                  handleClick={handleButtonLogin}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
