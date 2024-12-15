const InputComponent = ({ label, placeholder, handleChange, type }) => {
  return (
    <div className="mb-3">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputComponent;
