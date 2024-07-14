import React from 'react';
import { Link } from 'react-router-dom';
import './Cards.css';

const Cards = ({ item, handleClick }) => {
  const { id, title, price, imageUrl, quantity } = item;

  return (
    <div className='cards'>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <section>
        <p>{title}</p>
        <p>Rs.{price}</p>
        <p>{quantity}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
        <Link to={`/product/${id}`} state={{ item }}>View Product</Link>
      </section>
    </div>
  );
};

export default Cards;
