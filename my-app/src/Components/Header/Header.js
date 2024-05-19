import React from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
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
        <Button style={{ border: "2px solid skyblue" }} variant="dark">Dark</Button>
        <sup><h3 style={{ color: "skyblue" }}>0</h3></sup>
      </Container>
    </Navbar>
  );
};

export default Header;
