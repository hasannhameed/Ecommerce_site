import React from 'react';
import cartElements from '../Assets/Assets';
import Cards from '../Cards/Cards';
import './Body.css';

const Body = ({ handleClick }) => {
  
  return (
      <div className='contaaner'>
      <section className="body--section">
        <h1>Music</h1>
      </section>
    <section className="body-section">
      {
        cartElements.map((item, index) => (
          <Cards key={index} item={item} handleClick={handleClick} />
        ))
      }
    </section>
      
    </div>
  );
};

export default Body;
