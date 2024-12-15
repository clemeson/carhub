import { useEffect, useState } from 'react';
import { IoMdLogIn } from 'react-icons/io';
import Button from '../../Button';
import { Fetch } from '../../../service/Fetch'; // Adjust this import as needed
import InputComponent from '../../InputComponent';

function FormPublishCar({ title, subTitle, textButton, handleButton }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [data, setData] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    Fetch(setData); // Adjust this function call as per your API needs
  };

  return (
    <div className="d-flex justify-content-center">
      <div
        style={{
          width: screenWidth * 0.9, // 90% of the screen width
          maxWidth: '500px',
          maxHeight: '600px',
        }}
      >
        <h2 className="text-center text-dark mb-0">{title}</h2>
        <p className="text-center text-dark">{subTitle}</p>

        <form>
          <div className="mb-3 input-group-lg">
            <InputComponent type={'text'} placeholder={'Marca do Carro'} />
          </div>
          <div className="mb-3 input-group-lg">
            <InputComponent type={'text'} placeholder={'Modelo do Carro'} />
          </div>
          <div className="mb-3 input-group-lg">
            <InputComponent type={'text'} placeholder={'Ano do Carro'} />
          </div>
          <div className="mb-3 input-group-lg">
            <InputComponent type={'text'} placeholder={'Preço'} />
          </div>
          <div className="mb-3 input-group-lg">
            <InputComponent type={'text'} placeholder={'Descrição'} />
          </div>
          <div className="mb-3 input-group-lg">
            <InputComponent
              type={'file'} // Assuming you want to upload images
              placeholder={'Imagem do Carro'}
            />
          </div>

          <div className="d-flex justify-content-center">
            <Button
              color="primary"
              text={textButton}
              handleClick={handleClick}
              icon={<IoMdLogIn />}
            />
          </div>
        </form>

        <div className="text-center mt-3"></div>
      </div>
    </div>
  );
}

export default FormPublishCar;
