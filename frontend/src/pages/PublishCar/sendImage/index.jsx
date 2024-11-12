import React from 'react';
import ImageUpload from '../../../components/UploadImage';
import Button from '../../../components/Button';
// import { Container } from './styles';

import { Fetch } from '../../../service/Fetch';

const handleSend = () => {
  Fetch('/send-car', { ano: 'modelo' });
};

function SendImage() {
  return (
    <>
      <div className="container  d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="fs-4 fw-bold text-center">
          Envie até no minimo 5 fotos do seu carro, incluindo a foto da
          númeração do chassi legivel
        </h1>
        <ImageUpload></ImageUpload>
        <div className="w-50 my-5">
          <Button
            text={'Enviar'}
            color={'primary'}
            handleClick={handleSend}
          ></Button>
        </div>
      </div>
    </>
  );
}

export default SendImage;
