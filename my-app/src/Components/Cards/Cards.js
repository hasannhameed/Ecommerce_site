import React from 'react';
import './Cards.css';

const Cards = ({ item, handleClick }) => {
  const { title, price, imageUrl, quantity } = item;

  return (
    <div className='cards'>
      <div>
        <img src={imageUrl} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>Rs.{price}</p>
        <p>{quantity}</p>
        <button onClick={()=>handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Cards;
