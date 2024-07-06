import { ProtectedRoutes } from '@/components/ProtectedRoutes';
import { Error } from '@/pages/error';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/login';
import { MyPhotos } from '@/pages/myPhotos';
import { CreatePost } from '@/pages/post';
import { Profile } from '@/pages/profile';
import { SignUp } from '@/pages/signUp';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/my-photos',
        element: <MyPhotos />,
        errorElement: <Error />,
      },
      {
        path: '/post',
        element: <CreatePost />,
        errorElement: <Error />,
      },
      {
        path: '/profile',
        element: <Profile />,
        errorElement: <Error />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <Error />,
  },
]);
