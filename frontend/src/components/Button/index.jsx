const Button = ({ color, text, handleClick }) => {
  return (
    <button
      style={{ width: '100%' }}
      className={`btn btn-${color}`} // Use template literals for string interpolation
      onClick={handleClick} // Directly reference the handleClick function
    >
      {text}
    </button>
  );
};

export default Button;
