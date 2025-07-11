import "./CartPage.css";
import {incrementQuantity,decrementQuantity,removeFromCart} from "../Redux/actions/cartActions"
import {useDispatch,useSelector} from 'react-redux'
import Footer from "./Footer";

const CartPage = () => {

const dispatch = useDispatch();
const cartItems = useSelector((state)=>state.cart.cartProduct);
const totalPrice = useSelector((state)=>state.cart.totalPrice)

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
                  <button className="qty-btn" onClick={()=>dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="qty-btn" onClick={()=>dispatch(incrementQuantity(item.id))}>+</button>
                </div>
              </div>
              <button className="remove-btn" onClick={()=>dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Total: {totalPrice}</h3>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CartPage;
