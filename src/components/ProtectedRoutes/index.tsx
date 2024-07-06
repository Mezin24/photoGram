import { useLocation, Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoutes = () => {
  const isAuth: boolean = false;
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return <Outlet />;
};
