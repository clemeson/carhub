import toast from 'react-hot-toast';

import api from './api'; // Importa a instância do axios

export const Fetch = (endpoint, JSON, setDataResponse) => {
  toast.promise(
    api.get('/endpoint'), // Substitua pelo endpoint desejado
    {
      loading: 'Carregando...',
      success: (response) => {
        setDataResponse(response.data); // Armazena os dados no estado
        return response.data.message || 'Dados obtidos com sucesso!';
      },
      error: (error) => {
        const errorMessage =
          error.response?.data?.message || 'Ocorreu um erro ao obter os dados!';
        return errorMessage;
      },
    }
  );
};
