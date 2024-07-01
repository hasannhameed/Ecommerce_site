import React from 'react'
import './Header.css'
import Cart from '../Cart/Cart'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'




const Header = ({size, cart ,setShow,handleChange}) => {
  
  
  return (
    <Fragment>
      <header className='header'>
        <div className='nav-links'>
        <Link to="/Home" className="nav-link"><h5>HOME</h5></Link>
        <Link to="/" className="nav-link"><h5>STORE</h5></Link>
        <Link to="/About" className="nav-link"><h5>ABOUT</h5></Link>
        </div>
         <Link to="/Login" className="nav-link"><h5>Login</h5></Link>
         <button onClick={()=>setShow(true)} className='cart-button'><Cart size={size} cart={cart} setShow={setShow} handleChange={handleChange}/></button> 
         
      </header>
      <div className='main'>
        <h1>The Generics</h1>
      </div>
    </Fragment>
  )
}

export default Header;
