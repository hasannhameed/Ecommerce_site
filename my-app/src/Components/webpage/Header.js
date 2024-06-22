import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component
import './Header.css';

const Header = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  return (
    <>
      <Navbar className='Container-1 fixed-top' data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Row>
              <Col xs={6} md={4} className="text-center">
                <h4><Nav.Link href="#">HOME</Nav.Link></h4>
              </Col>
              <Col xs={6} md={4} className="text-center">
                <h4><Nav.Link href="#">STORE</Nav.Link></h4>
              </Col>
              <Col xs={6} md={4} className="text-center">
                <h4><Nav.Link href="#">ABOUT</Nav.Link></h4>
              </Col>
            </Row>
          </Nav>
          <Button style={{ border: "2px solid skyblue" }} variant="dark" onClick={handleShowCart}>
            Cart
          </Button>
          <sup><h3 style={{ color: "skyblue" }}>{cart.length}</h3></sup>
        </Container>
        <Cart show={showCart} handleClose={handleCloseCart} cartItems={cart} />
      </Navbar>
      
    </>
  );
};

export default Header;
