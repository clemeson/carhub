// import { Container } from './styles';
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
    <>
      <div className="container calc-vh-100 align-items-center d-flex flex-column pt-5">
        <div className="w-50">
          {' '}
          <img
            className="w-100"
            style={{ maxWidth: '450px' }}
            src={findCar}
            alt="Carro 1"
            data-aos="flip-left"
          />
        </div>

        <div className="w-75 mx-auto my-2">
          <InputComponent
            label={'Buscar...'}
            type={'text'}
            placeholder={'Econtre o carro perfeito, perto de voce!'}
            handleChange={handleSearchCarInput}
          ></InputComponent>
        </div>

        <div className="w-75 my-2">
          <Button color={'warning'} text={'Buscar'}></Button>
        </div>
      </div>
    </>
  );
}

export default SearchCars;
