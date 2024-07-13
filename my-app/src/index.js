import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
// import Login from './Pages/LoginPage/Login';
import Report from './Pages/ReportPage.js/Report';
import { AuthContextProvider } from './Authentication/src/Store.js/auth-context';
import AuthPage from './Authentication/src/pages/AuthPage';
import UserProfile from './Authentication/src/components/Profile/UserProfile';
import HomePage from './Authentication/src/pages/HomePage'

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
    element: <AuthPage />
  },
  {
    path: '/Report',
    element: <Report />
  },
  {
    path: '/auth',
    element: <AuthPage />
  },
  {
    path: '/profile',
    element: < UserProfile />
  },
  {
    path: '/HomaPage',
    element: <HomePage/>
  },
]);

ReactDOM.render(
  <AuthContextProvider> 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </AuthContextProvider>,
  document.getElementById('root')
);
