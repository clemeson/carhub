// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seu-backend.com/api', // Substitua pela URL base do seu backend
  timeout: 5000,
});

export default api;
