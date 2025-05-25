import { useDispatch, useSelector } from 'react-redux';
import { removeFromWish } from '/src/features/cart/cartslice.js';
import "./card.css";

const AddedWishlist = () => {
  const cartItems = useSelector((state) => state.cart.items2);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    console.log("Removing ID from component:", id);
    dispatch(removeFromWish(id));
  };

  return (
    <div className="wishlist-wrapper">
      <h2>🛒 Wishlist</h2>
      {cartItems.length === 0 ? (
        <p>No items in the wishlist.</p>
      ) : (
        <ul>
          <div className="containerwisht">
            {cartItems.map((item, idx) => (
              <div id='itesmwisht' className="itesmwisht" key={item.id ?? idx}>
                <img
                  src={item.avatar1 || null}
                  alt={item.brand}
                  className="wishlist-image"
                />
                <h3 id='nnn' className="wishlist-model">{item.model}</h3>
                <p id='ppp' className="wishlist-price">Price: ${item.price}</p>
                <button id='bbb'
                  className="wishlist-remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
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

export default AddedWishlist;
