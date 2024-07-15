import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      alert("Item already added");
      return;
    }
    setCart([...cart, { ...item, amount: 1 }]);
  };

  const handleChange = (id, action) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, amount: action === "increment" ? cartItem.amount + 1 : cartItem.amount - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.amount > 0)
    );
  };

  return (
    <>
      <Header size={cart.length} cart={cart} setShow={() => {}} handleChange={handleChange} />
      <Body handleClick={handleClick} />
      <Footer />
    </>
  );
}

export default App;
