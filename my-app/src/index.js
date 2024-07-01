import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/LoginPage/Login';
import Report from './Pages/ReportPage.js/Report';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/About',
    element: <About />
  }, {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Report',
    element: <Report />
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
