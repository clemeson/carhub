import { useState, useEffect } from 'react';

const Button = ({ color, text, handleClick, icon }) => {
  const [buttonSize, setButtonSize] = useState('btn-lg');

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      // 576px is the default Bootstrap sm breakpoint
      if (window.innerWidth < 576) {
        setButtonSize('btn-sm');
      } else {
        setButtonSize('btn-lg');
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <button
      style={{ width: '100%', maxHeight: '60px' }}
      className={`btn btn-${color} text-button ${buttonSize} fw-semibold d-flex gap-2 align-items-center justify-content-center`}
      onClick={handleClick}
    >
      {text}
      {icon && <span className="d-flex align-items-center">{icon}</span>}
    </button>
  );
};

export default Button;
