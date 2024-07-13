import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <h1>No product data available</h1>;
  }

  return (
    <div>
      <h1>Product Page</h1>
      <div>
        <img src={item.imageUrl} alt={item.title} />
        <h2>{item.title}</h2>
        <p>Price: Rs.{item.price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
    </div>
  );
};

export default Product;
