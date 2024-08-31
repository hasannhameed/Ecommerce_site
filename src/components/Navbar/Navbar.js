import React, { Fragment } from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <Fragment>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo">.</label>
                <ul>
                    <li><a  href="#">HOME</a></li>
                    <li><a href="#">STORE</a></li>
                    <li><a href="#">ABOUT</a></li>
                </ul>
                <div className='btn'>
                   <button> Cart </button>
                   <sup>0</sup>
                </div>
            </nav>
       </Fragment>
    )
}

export default Navbar;
