import { createHashRouter, RouterProvider } from 'react-router';
import Home from 'Pages/Home';
import './App.css';

const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
