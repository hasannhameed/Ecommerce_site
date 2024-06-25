import React from 'react'
import './Header.css'
import Cart from '../Cart/Cart'
import { Fragment } from 'react'

const Header = ({size, cart ,setShow,handleChange}) => {
  
  return (
    <Fragment>
      <header className='header'>
        <div className='nav-links'>
          <h5>HOME</h5>
          <h5>STORE</h5>
          <h5>ABOUT</h5>
        </div>

         <button onClick={()=>setShow(true)} className='cart-button'><Cart size={size} cart={cart} setShow={setShow} handleChange={handleChange}/></button> 
       
      </header>
      <div className='main'>
        <h1>The Generics</h1>
      </div>
    </Fragment>
  )
}

export default Header
