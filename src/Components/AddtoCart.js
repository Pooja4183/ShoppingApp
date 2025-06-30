import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddToCart({cartItems}) {
  return (
    <>
    <Link
      to="/cart"
      style={{
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        color: "#333",
        fontWeight: "bold",
        position: "relative",
        padding: "0 10px",
      }}
    >
      <FaShoppingCart size={22} />
      <span style={{ marginLeft: "5px" }}>Cart</span>
      <span
        style={{
          position: "absolute",
          top: "-6px",
          right: "0px",
          backgroundColor: "red",
          color: "white",
          borderRadius: "50%",
          padding: "2px 6px",
          fontSize: "11px",
        }}
      >
       {cartItems.reduce((total, item) => total + item.quantity, 0)}
      </span>
    </Link>
  
    </>
    
  );
}

export default AddToCart;
