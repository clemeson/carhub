import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import { Fetch } from '../../service/Fetch';
import ImageUpload from '../../components/UploadImage';
import FormSignup from '../../components/Forms/FormSignup';
import { useNavigate } from 'react-router-dom';
function PublishCar({ title, subTitle }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [data, setData] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    Fetch(setData);
  };

  const handleImageSelect = (file) => {
    if (file) {
      // Aqui você pode:
      // 1. Fazer upload direto para o servidor
      // 2. Guardar o arquivo para enviar junto com o restante do formulário
      console.log('Arquivo selecionado:', file);

      // Exemplo de upload usando FormData
      const formData = new FormData();
      formData.append('image', file);

      // fetch('/api/upload', {
      //   method: 'POST',
      //   body: formData
      // });
    }
  };
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate('/publish-car/send');
  };
  return (
    <>
      <FormSignup textButton={'Próximo'} handleButton={handleBtn}></FormSignup>
    </>
  );
}

export default PublishCar;
