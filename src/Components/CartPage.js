import "./CartPage.css";
import { useContext } from "react";
import {myContext} from "../MainApp"

const CartPage = () => {

const {cartItems,onIncrease,onDecrease,onRemove ,totalPrice} = useContext(myContext);

  return (
    <>
      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>
        <div className="cart-items-section">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt="Product" className="item-image" />
              <div className="item-details">
                <h4>{item.title}</h4>
                <p>Price: {item.price}</p>
                <div className="quantity-controls">
                  <button className="qty-btn"  onClick={() => onDecrease(item.id)} >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn"  onClick={() => onIncrease(item.id)}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Total: {totalPrice}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
