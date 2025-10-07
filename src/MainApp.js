import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Components/ProductDetail";
import CartPage from "./Components/CartPage";
import WishListPage from "./Components/WishListPage";
import WomenProducts from "./Pages/WomenProducts";
import Profile from "./Pages/Profile";
import AuthForm from "./Pages/AuthForm";
import { useSelector } from "react-redux";
import VerifyOtp from "./Pages/VerifyOtp";
import AdminProductForm from "./Pages/AdminProductForm";
import Header from "./Components/Header";
import ProductPage from "./Pages/ProductPage";

function MainApp() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/women" element={<WomenProducts />} />
        <Route
          path="/Prodectdetails/:id"
          element={<ProductDetail isAuthenticated={isAuthenticated} />}
        />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/login" element={<AuthForm mode="login" />} />
        <Route path="/signup" element={<AuthForm mode="signup" />} />
        <Route path="/contact-us" element={<Profile />} />
        <Route
          path="/wishlist"
          element={
            isAuthenticated ? <WishListPage /> : <Navigate to="/login" />
          }
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="admin-form" element={<AdminProductForm />} />
      </Routes>
    </>
  );
}

export default MainApp;
