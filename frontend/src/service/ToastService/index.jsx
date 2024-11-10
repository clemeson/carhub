// toastService.js
import { toast } from 'react-hot-toast';
import { Fetch } from '../Fetch';
const PromiseNotify = () =>
  toast.promise(Fetch(), {
    loading: 'loading...',
    success: 'Successfully get data',
    error: 'error occurs in data',
  });

export const showToast = (type, message) => {
  switch (type) {
    case 'promise':
      PromiseNotify();
      break;
    case 'success':
      toast.success(message || 'Ação realizada com sucesso!');
      break;
    case 'error':
      toast.error(message || 'Ocorreu um erro!');
      break;
    case 'warning':
      toast.warn(message || 'Atenção! Verifique as informações.');
      break;
    case 'info':
      toast.info(message || 'Informação importante!');
      break;
    default:
      toast(message || 'Notificação!');
  }
};
