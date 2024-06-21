import React, { Fragment } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import './Body.css';

const productsArr = [
  {
    title2: 'hello',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  }
];

const Body = () => {
  return (
   < Fragment>
   <div className="p-5">
        <h1 className="main-title">The Generic</h1>
      </div>
    <Container className='body-container'>
      <div className="p-4">
        <h1 className="section-title">PRODUCTS</h1>
      </div>
      <Row className="gy-4">
        {productsArr.map((product, index) => (
          <Col xs={12} md={6} lg={4} key={index} className="d-flex flex-column align-items-center">
            <h3>{product.title}</h3>
            <Image className='images' src={product.imageUrl} rounded />
            <div className="container-2">
              <div className='Info'><p>${product.price}</p></div>
              <div className='Info'><Button className='button-2'>ADD TO CART</Button></div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </Fragment>
  );
};

export default Body;
