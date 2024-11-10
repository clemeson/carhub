// components/LoadingSpinner.js

import Spinner from 'react-bootstrap/Spinner';

const LoadingSpinner = () => (
  <div className="loading-spinner calc-vh-100 d-flex align-items-center justify-content-center">
    <Spinner animation="grow" role="status" variant="warning">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  </div>
);

export default LoadingSpinner;
