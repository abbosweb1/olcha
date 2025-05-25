import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '/src/features/cart/cartslice';
import "./card.css";

const Addedcart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <div className="cart-wrapper">
      <h2>🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          <div className="containercart">
            {cartItems.map((item, idx) => (
              <div id='itemcart' className="itemcart" key={idx}>
                <img src={item.avatar1 || null} alt={item.brand} className="cart-image" />
                <h3 id='nnn' className="cart-model">{item.model}</h3>
                <p id='ppp' className="cart-price">Price: ${item.price}</p>
                <p id='ppp' className="cart-quantity">
                  <strong>Quantity:</strong> {item.quantity}
                </p>
                <button id='bbb' className="remove-btn" onClick={() => handleRemove(idx)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
};

export default Addedcart;
