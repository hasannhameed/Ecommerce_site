
import './Cart.css';

const Cart = ({ show, handleClose, cartItems }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Cart</h2>
          <button onClick={handleClose} className="close-button">X</button>
        </div>
        <div className="modal-body">
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>1</td> {/* For now, assuming quantity is 1 */}
                </tr>
              ))}
            </tbody>
          </table>
          {cartItems.length === 0 && (
            <p>Your cart is empty</p>
          )}
        </div>
        <div className="modal-footer">
          <button className="purchase-button">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
