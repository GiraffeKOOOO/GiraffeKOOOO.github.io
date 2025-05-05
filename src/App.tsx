import { createHashRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'contact',
    element: <ContactPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
