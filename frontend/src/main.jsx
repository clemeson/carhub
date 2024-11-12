import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
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
import LoadingSpinner from './components/LoadingSpiner';
import { ProtectedRoute } from './components/ProtectedRoute';
import SendImage from './pages/PublishCar/sendImage';
AOS.init();

const Layout = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true); // Ativa o loading no início da navegação

    const timer = setTimeout(() => setIsLoading(false), 1000); // Desativa o loading após o atraso

    return () => clearTimeout(timer); // Limpeza do timer ao desmontar
  }, [location]);

  return (
    <>
      {isLoading ? ( // Condicional para mostrar apenas o spinner quando isLoading for true
        <div>
          {' '}
          <Header></Header>
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
        </>
      )}
    </>
  );
};

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
        path: '/publish-car/send',
        element: <SendImage></SendImage>,
      },

      {
        path: '/aboutus',
        element: <AboutUs />,
      },
      {
        path: '/questions',
        element: <Questions />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster position="top-center" />
    <RouterProvider router={router} />
  </React.StrictMode>
);
