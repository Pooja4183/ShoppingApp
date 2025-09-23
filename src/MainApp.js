import { Routes, Route, Link, Navigate } from "react-router-dom";
import AppLogo from "./Components/AppLogo";
import Home from "./Pages/Home";
import ProductDetail from "./Components/ProductDetail";
import AddToCart from "./Components/AddtoCart";
import CartPage from "./Components/CartPage";
import WishListPage from "./Components/WishListPage";
import AddToWishlistHeader from "./Components/AddToWishlistHeader";
import ProfileHeader from "./Components/ProfileHeader";
import WomenProducts from "./Pages/WomenProducts";
import Profile from "./Pages/Profile";
import AuthForm from "./Pages/AuthForm";
import { useSelector } from "react-redux";
import VerifyOtp from "./Pages/VerifyOtp";
import AdminProductForm from "./Pages/AdminProductForm";

function MainApp() {
  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)

  return (
    <>
      
      <nav className="navbar bg-white shadow-md px-6 py-3">
        {/* Left: Logo + Categories */}
        <div className="navbar-start gap-6 items-center">
          <Link to="/" className="mr-4">
            <AppLogo />
          </Link>
          <Link
            to="/women"
            className="text-sm font-medium hover:text-pink-500"
          >
            WOMEN
          </Link>
          <Link
            to="/men"
            className="text-sm font-medium hover:text-pink-500"
          >
            MEN
          </Link>
          <Link
            to="/home-decore"
            className="text-sm font-medium hover:text-pink-500"
          >
            HOME DECORE
          </Link>
          <Link
            to="/beauty"
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
          <ProfileHeader />
          <AddToWishlistHeader  isAuthenticated={isAuthenticated}/>
          <AddToCart />
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product" element={<ProductCard />} /> */}
         <Route path="/women" element={<WomenProducts />} />
        <Route
          path="/Prodectdetails/:id"
          element={<ProductDetail isAuthenticated={isAuthenticated} />}
        />
         <Route path="/verify-otp" element={<VerifyOtp/>}/>
        <Route path="/login" element={<AuthForm mode="login" />} />
       <Route path="/signup" element={<AuthForm mode="signup" />} />
         <Route path="/contact-us" element={<Profile />} />
        <Route
          path="/wishlist"
          element={isAuthenticated ? <WishListPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/cart"
          element={<CartPage/>}
        />
        <Route path="admin-form" element={<AdminProductForm/>}/>
      </Routes>
    </>
  );
}

export default MainApp;
