import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const token = sessionStorage.getItem('token');

  if (!token) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};
