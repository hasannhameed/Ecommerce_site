import React from 'react'
import classes from './Header.css'
import Cart from '../Cart/Cart'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../../Authentication/src/Store.js/auth-context'




const Header = ({ size, cart, setShow, handleChange }) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <Fragment>
      <header className='header'>
        <div className='nav-links'>
          <Link to="/Home" className="nav-link"><h5>HOME</h5></Link>
          <Link to="/" className="nav-link"><h5>STORE</h5></Link>
          <Link to="/About" className="nav-link"><h5>ABOUT</h5></Link>
        </div>
        <header className={classes.header}>
          <nav>
            <ul>
              {!isLoggedIn && (
                <li>
                  <Link to="/Login" className="nav-link"><h5>Login</h5></Link>
                </li>
              )}
              {isLoggedIn && (
                <li>
                  <Link to='/profile' className="nav-link"><h5>Profile</h5></Link>
                </li>
              )}
            </ul>
          </nav>
        </header>

        {/* <Link to="/Login" className="nav-link"><h5>Login</h5></Link> */}
        <button onClick={() => setShow(true)} className='cart-button'><Cart size={size} cart={cart} setShow={setShow} handleChange={handleChange} /></button>

      </header>
      <div className='main'>
        <h1>The Generics</h1>
      </div>
    </Fragment>
  )
}

export default Header;
