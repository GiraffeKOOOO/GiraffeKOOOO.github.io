import { createHashRouter, RouterProvider } from 'react-router';
import './App.css';

const router = createHashRouter([
  // {
  //   path: '/',
  //   element: <HomePage />,
  // },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
