import { useState, useEffect } from 'react';

const Button = ({ color, text, handleClick, icon }) => {
  return (
    <button
      style={{ maxHeight: '60px' }}
      className={`btn btn-${color} text-button w-100 fw-semibold d-flex gap-2 align-items-center justify-content-center`}
      onClick={handleClick}
    >
      {text}
      {icon && <span className="d-flex align-items-center">{icon}</span>}
    </button>
  );
};

export default Button;
