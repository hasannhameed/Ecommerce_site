import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ size, cart, handleChange }) => {
  const [amount, setAmount] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const handlePrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.amount * item.price;
    });
    setAmount(parseInt(totalPrice));
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <button className='button' onClick={toggleCart}>
        <span className='icon'>Cart</span>
        <span className='badge'>{size}</span>
      </button>

      {showCart && (
        <div className='cart-overlay'>
          <div className='cart'>
            <header>
              <h2>Your Cart</h2>
              <button className='close-btn' onClick={() => setShowCart(false)}>
                Close Cart
              </button>
            </header>
            <article>
              {cart.map((item) => (
                <div className='cart-box' key={item.id}>
                  <div className='cart_img'>
                    <img src={item.imageUrl} alt={item.title} />
                    <p>{item.title}</p>
                    <span>Rs.{item.price}</span>
                  </div>
                  <div>
                    <button >+</button>
                    {/* onClick={() => incrementAmount(item.id)} */}
                    <span>{item.amount}</span>
                    <button  >-</button>
                    {/* onClick={() => decrementAmount(item.id)} */}
                  </div>
                  <div>
                    <button onClick={()=>handleChange(item.id,"+")}>Remove</button>
                    {/* onClick={() => removeItem(item.id)} */}
                  </div>
                </div>
              ))}
              <div className='cart-footer'>
                <span>Total Price</span>
                <span>Rs - {amount}</span>
              </div>
            </article>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
