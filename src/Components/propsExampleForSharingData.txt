import "./App.css";
import "./index.css";
import Home from "./Home";
import LoginUser from "./LearningComp/Local_storage_getValue";
import Localstorage from "./LearningComp/Local_storage_setValue";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductCard from "./Components/Card";
import ProductDetail from "./Components/ProductDetail";
import AddToCart from "./Components/AddtoCart";
import { useState } from "react";
import CartPage from "./Components/CartPage";
import { createContext, useContext } from "react";

const myContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  // adding product in the cart just displaying in the header icon
  const handleAddToCart = (product) => {
    const itemCart = cartItems.find((item) => item.id === product.id);

    if (itemCart) {
      const updatedCart = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: (item.quantity || 1) + 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //  add quantity og the cart items
  const handleIncrease = (id) => {
    const updatedQuantity = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedQuantity);
  };

  // to decrese the cart items
  const handleDecrease = (id) => {
  const item = cartItems.find((item) => item.id === id);
  
  if (item.quantity === 1) {
    // Remove the item from the cart if quantity is 1
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  } else {
    // Otherwise, decrease the quantity
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }
};
  
  // to remove the prodcut from the cart
  const handleRemove = (id) => {
    const updatedQuantity = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedQuantity);
  };

  // total price of cart itmes
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
    <myContext.Provider value={{cartItems:{cartItems},
                onIncrease:{handleIncrease},
                onDecraese:{handleDecrease},
                onRemove:{handleRemove},
                totalPrice:{totalPrice}}}>
      <Router>
        <nav
          style={{
            backgroundColor: "#f8f8f8",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/" style={navStyle}>
              Home
            </Link>
            <Link to="/product" style={navStyle}>
              Product
            </Link>
            <Link to="/signup" style={navStyle}>
              Signup
            </Link>
          </div>
          <AddToCart cartItems={cartItems} />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductCard />} />
          <Route
            path="/Prodectdetails/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route path="/signup" element={<Localstorage />} />
          <Route path="/login" element={<LoginUser />} />
          <Route
            path="/cart"
            element={
              <CartPage/>
            }
          />
        </Routes>
      </Router>
      </myContext.Provider>
    </>
  );
}

const navStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
};

export default App;
