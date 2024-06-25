import React, { createContext, useState } from 'react';

// Create a context for the cart
export const CartContext = createContext();

// CartProvider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add item to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove item from the cart
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(product => product !== productToRemove);
    setCart(updatedCart);
  };

  // Context value object
  const cartContextValue = {
    cart,
    addToCart,
    removeFromCart,
  };

  // Provide the context value to its children
  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
