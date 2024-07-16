import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Report from './Pages/ReportPage.js/Report';
import { AuthContextProvider } from './Authentication/Store.js/auth-context';
import AuthPage from './Authentication/pages/AuthPage';
import UserProfile from './Authentication/components/Profile/UserProfile';
import HomePage from './Authentication/pages/HomePage'
import ProductList from './Pages/ProductPage/Product';
import Product from './Pages/ProductPage/Product';
ReactDOM.render(
  <AuthContextProvider>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<App />}  />
          <Route path="/Home"  element={<Home />}  />
          <Route path="/About" element={<About />}  />
          <Route path="/Login" element={<AuthPage />} />
          <Route path="/Report"  element={<Report />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/profile"  element={<UserProfile />}  />
          <Route path="/HomePage" element={<HomePage />}/>
          <Route path="/products"  element={<ProductList />}  />
          <Route path="/product/:id"  element={<Product />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </AuthContextProvider>,
  document.getElementById('root')
);
