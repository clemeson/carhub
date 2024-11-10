import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import SearchCars from './pages/SearchCars';
import PublishCar from './pages/PublishCar';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import AboutUs from './pages/AboutUs';
import Questions from './pages/Questions';

AOS.init();

const Layout = () => (
  <>
    <Header />
    <Outlet></Outlet>
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Usa o layout com Header em todas as páginas
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/signup',
        element: <SignUp />,
      },
      {
        path: '/search-cars',
        element: <SearchCars />,
      },
      {
        path: '/publish-car',
        element: <PublishCar />,
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/questions',
        element: <Questions></Questions>,
      },
      {
        index: true, // Define '/' para renderizar Home como padrão
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-center" /> {/* Inclui o Toaster aqui */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
