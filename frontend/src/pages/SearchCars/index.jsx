import findCar from '../../assets/findcar.svg';
import { useState } from 'react';
import InputComponent from '../../components/InputComponent';
import Button from '../../components/Button';

function SearchCars() {
  const [inputValue, setInputValue] = useState('');

  const handleSearchCarInput = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  return (
    <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-6 mb-4 text-center">
          <img
            className="img-fluid" // Ensures the image is responsive
            src={findCar}
            alt="Carro 1"
            style={{ maxWidth: '450px' }}
            data-aos="flip-left"
          />
        </div>

        <div className="col-12 col-md-8 mb-3">
          <InputComponent
            label={'Buscar...'}
            type={'text'}
            placeholder={'Encontre o carro perfeito, perto de você!'}
            handleChange={handleSearchCarInput}
          />
        </div>

        <div className="col-12 col-md-8">
          <Button color={'warning'} text={'Buscar'} />
        </div>
      </div>
    </div>
  );
}

export default SearchCars;
