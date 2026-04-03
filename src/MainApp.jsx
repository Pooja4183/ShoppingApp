import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import CartPage from "./Pages/CartPage";
import WishListPage from "./Components/WishListPage";
import Profile from "./Pages/Profile";
import AuthForm from "./Pages/AuthForm";
import { useSelector } from "react-redux";
import VerifyOtp from "./Pages/VerifyOtp";
import AdminProductForm from "./Pages/AdminProductForm";
import Header from "./Components/Header";
import ProductDashboard from "./Pages/ProductDashboard";
import AddressPage from "./Pages/AddressPage";
import PaymentPage from "./Pages/PaymentPage";
import OrderSuccessPage from "./Pages/OrderSuccessPage";
import OrderDetail from "./Components/profile/orderDetail";
import Products from "./Pages/admin/pages/products";

function MainApp() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />

      <Routes>
        {/* Product related routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductDashboard />} />

        <Route path="/search" element={<ProductDashboard />} />

        <Route
          path="/Prodectdetails/:id"
          element={<ProductDetail isAuthenticated={isAuthenticated} />}
        />

        {/* User routes */}
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/login" element={<AuthForm mode="login" />} />
        <Route path="/signup" element={<AuthForm mode="signup" />} />
        <Route path="/contact-us" element={<Profile />} />

        {/* ✅ ADDED PROFILE PROTECTED ROUTE */}
        <Route
          path="/profile/*"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />

        <Route
          path="/wishlist"
          element={
            isAuthenticated ? <WishListPage /> : <Navigate to="/login" />
          }
        />

        {/* Order flow routes */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/payment/:orderId" element={<PaymentPage />} />
        <Route path="/order-success/:orderId" element={<OrderSuccessPage />} />
        <Route path="/order/:orderId" element={<OrderDetail />} />

        {/* Admin routes */}
        <Route path="/admin/products/create" element={<Products />} />

      </Routes>
    </>
  );
}

export default MainApp;
