import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/* 
  import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/facebook-8.png';
import image8 from './images/youtube-7.png';
import image9 from './images/spotigy-9.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <Navbar className='Container-1 fixed-top' data-bs-theme="dark">
        <Navbar.Brand className="me-auto">
          <Row>
            <Col xs={6} md={4} className="text-center"><h4><Nav.Link>HOME</Nav.Link></h4></Col>
            <Col xs={6} md={4} className="text-center"><h4><Nav.Link>STORE</Nav.Link></h4></Col>
            <Col xs={6} md={4} className="text-center"><h4><Nav.Link>ABOUT</Nav.Link></h4></Col>
          </Row>
        </Navbar.Brand>
        <Button style={{ border: "2px solid skyblue" }} variant="dark">Dark</Button>
        <sup><h3 style={{ color: "skyblue" }} >0</h3></sup>
      </Navbar>
        <div className="p-5">
          <h1 style={{ fontSize: '6rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>The Generic</h1>
        </div>
      <div className="p-4">
          <h1 style={{ fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>MUSIC</h1>
      </div>
      <section>
        <Container fluid="md">
          <Row className="gy-4">
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
              <h3>Album1</h3>
              <Image className='images' src={image5} rounded />
              <div className="container-2">
                <div className='Info'> <p>$12.99</p></div>
                <div className='Info'><Button className='button-2' >ADD TO CART</Button>{' '}</div>
             </div>
            </Col>
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
              <h3>Album2</h3>
              <Image className='images' src={image6} rounded />
              <div className="container-2">
                <div className='Info'> <p>$12.99</p></div>
                <div className='Info'><Button className='button-2' >ADD TO CART</Button>{' '}</div>
             </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid="md">
          <Row className="gy-4">
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
              <h3>Album3</h3>
              <Image className='images' src={image2} rounded />
              <div className="container-2">
                <div className='Info'> <p>$12.99</p></div>
                <div className='Info'><Button className='button-2' >ADD TO CART</Button>{' '}</div>
             </div>
            </Col>
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
              <h3>Album4</h3>
              <Image  className='images' src={image1} rounded />
              <div className="container-2">
                <div className='Info'> <p>$12.99</p></div>
                <div className='Info'><Button className='button-2' >ADD TO CART</Button>{' '}</div>
             </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="p-4">
          <h1 style={{ fontSize: '2rem', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>MERCH</h1>
      </div>
      <section>
        <Container fluid="md">
          <Row className="gy-4"> 
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
              <h3>Coffee</h3>
              <Image className='images' src={image3} rounded />
              <div className="container-2">
                <div className='Info'> <p>$12.99</p></div>
                <div className='Info'><Button  className='button-2'>ADD TO CART</Button>{' '}</div>
             </div>
            </Col>
            <Col xs={6} md={4} className="d-flex flex-column align-items-center">
              <h3>T-shirt</h3>
              <Image  className='images' src={image4} rounded />
              <div className="container-2">
                <div className='Info'> <p>$12.99</p></div>
                <div className='Info' ><Button className='button-2'>ADD TO CART</Button>{' '}</div>
             </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
      <div className='Info-2' ><Button className='button-1' >ADD TO CART</Button>{' '}</div>
      </section>
      <footer>
        <div class="footer-title">
            The Generics
        </div>
        <div class="footer-icons">
            <ul>
                <li><a href="https://www.youtube.com">
                   <Image  src={image7} rounded />
                </a></li>
                <li><a href="https://spotify.com">
                    <Image src={image8} rounded />
                </a></li>
                <li><a href="https://facebook.com">
                    <Image src={image9} rounded />
                </a></li>
            </ul>
        </div>
    </footer>
    </>
  );
}

export default App;


*/