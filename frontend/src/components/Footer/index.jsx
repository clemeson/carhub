import React from 'react';

// import { Container } from './styles';

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  border-top ">
      <div className="col-md-4 d-flex align-items-center justify-content-center w-100">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
        >
          <svg className="bi" width="30" height="24">
            <img src={''}></img>
          </svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary text-center w-100">
          <p className="text-center">
            {' '}
            © 2024 ETE - Jurandir Bezerra Lins, Inc - CarHub Corporation
          </p>
        </span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <img src={''}></img>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <img src={''}></img>
            </svg>
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="#">
            <svg className="bi" width="24" height="24">
              <img src={''}></img>
            </svg>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
