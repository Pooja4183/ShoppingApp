import { Routes, Route, Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

import AppLogo from "./Components/AppLogo";
import Home from "./Home";
import LoginUser from "./LearningComp/Local_storage_getValue";
import Localstorage from "./LearningComp/Local_storage_setValue";
import ProductCard from "./Components/ProductCard";
import ProductDetail from "./Components/ProductDetail";
import AddToCart from "./Components/AddtoCart";
import CartPage from "./Components/CartPage";
import WishListPage from "./Components/WishListPage";
import AddToWishlistHeader from "./Components/AddToWishlistHeader";
import ProfileHeader from "./Components/ProfileHeader";

function MainApp() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      
      <nav className="navbar bg-white shadow-md px-6 py-3">
        {/* Left: Logo + Categories */}
        <div className="navbar-start gap-6 items-center">
          <Link to="/" className="mr-4">
            <AppLogo />
          </Link>
          <Link
            to="/product"
            className="text-sm font-medium hover:text-pink-500"
          >
            WOMEN
          </Link>
          <Link
            to="/product"
            className="text-sm font-medium hover:text-pink-500"
          >
            MEN
          </Link>
          <Link
            to="/product"
            className="text-sm font-medium hover:text-pink-500"
          >
            HOME DECORE
          </Link>
          <Link
            to="/product"
            className="text-sm font-medium hover:text-pink-500"
          >
            BEAUTY
          </Link>
        </div>

   
        {/* Center: Search Bar with icon */}
        <div className="navbar-center w-[30%] relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full text-sm pl-10 pr-4 py-2 rounded bg-gray-100 focus:bg-white focus:outline-none border border-transparent focus:border-gray-300 transition"
          />
        </div>
        
        {/* Right: Profile + Wishlist + Cart */}
        <div className="navbar-end gap-6 text-xs font-medium text-black">
          {isLoggedIn && <ProfileHeader />}
          {isLoggedIn && <AddToWishlistHeader />}
          {isLoggedIn && <AddToCart />}
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductCard />} />
        <Route
          path="/Prodectdetails/:id"
          element={<ProductDetail isLoggedIn={isLoggedIn} />}
        />
        <Route path="/signup" element={<Localstorage />} />
        <Route path="/login" element={<LoginUser />} />
        <Route
          path="/wishlist"
          element={isLoggedIn ? <WishListPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={isLoggedIn ? <CartPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default MainApp;
