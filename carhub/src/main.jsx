import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header"

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
     <Header></Header>
    <App />
  </StrictMode>,
)
