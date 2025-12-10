import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../Redux/actions/cartActions";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartProduct);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <>
      <div className="bg-gradient-to-b from-[#faf5ff] to-white min-h-screen flex justify-center py-8 px-4">
        <div className="w-full max-w-6xl flex flex-col gap-6">
          {/* ---------- MAIN FLEX: LEFT (Address + Cart) + RIGHT (Summary) ---------- */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* ---------- LEFT COLUMN ---------- */}
            <div className="flex-[0.65] flex flex-col gap-6">
              {/* Delivery Address */}
              <div className="bg-white border border-gray-200 shadow-sm p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    Delivery Address
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    205, C Block, Vrindavan Residency, Gandhinagar
                  </p>
                </div>
                <button
                  onClick={() => navigate("/login")}
                  className="border border-pink-400 text-pink-600 hover:bg-pink-50 px-4 py-1.5 rounded-md text-sm font-medium transition-colors duration-150"
                >
                  Log In / Change
                </button>
              </div>

              {/* Cart Section */}
              <div className="bg-white border border-gray-200 p-5 rounded-md shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                  Your Cart
                </h1>

                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500">
                    Your cart is empty
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item._id}
                      className="flex flex-col md:flex-row justify-between border-b border-gray-300 pb-5 mb-5"
                    >
                      <div className="flex gap-5">
                        <img
                          src={
                            item.images && item.images.length > 0
                              ? item.images[0].url
                              : ""
                          }
                          alt={item.title}
                          className="w-28 h-28 object-cover rounded-sm border border-gray-100"
                        />
                        <div>
                          <h2 className="text-base font-semibold text-gray-800">
                            {item.title}
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            Color: Lavender Blush | Size: UK/IND-7
                          </p>

                          <div className="flex items-center mt-1 gap-2">
                            <span className="text-base font-semibold text-gray-900">
                              ₹{item.price}
                            </span>
                            <span className="text-pink-500 text-xs font-medium">
                              25% Off
                            </span>
                          </div>

                          <p className="text-xs text-gray-400 mt-1">
                            Delivery by{" "}
                            <span className="font-medium text-gray-600">
                              16th Dec
                            </span>
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-0.5 rounded-sm font-bold text-sm"
                              onClick={() =>
                                dispatch(decrementQuantity(item._id))
                              }
                            >
                              −
                            </button>
                            <span className="font-semibold text-gray-800 text-sm">
                              {item.quantity}
                            </span>
                            <button
                              className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-2 py-0.5 rounded-sm font-bold text-sm"
                              onClick={() =>
                                dispatch(incrementQuantity(item._id))
                              }
                            >
                              +
                            </button>
                          </div>

                          {/* Actions */}
                          <div className="flex gap-4 mt-2 text-sm text-gray-500 font-normal">
                            <button
                              onClick={() => dispatch(removeFromCart(item._id))}
                              className="hover:text-gray-700 transition-colors duration-150"
                            >
                              Delete
                            </button>
                            <span className="text-gray-400">|</span>
                            <button className="hover:text-gray-700 transition-colors duration-150">
                              Save for later
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* ---------- RIGHT COLUMN (Summary Panel) ---------- */}
            <div className="flex-[0.35] flex flex-col gap-4 self-start">
              {/* Coupon Section */}
              <div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Apply Coupon
                </h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon"
                    className="border border-gray-300 rounded-sm p-2 flex-1 text-sm focus:outline-none focus:ring-1 focus:ring-pink-400"
                  />
                  <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-sm text-sm font-medium transition-all">
                    Apply
                  </button>
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm">
                <h3 className="text-base font-semibold text-gray-800 mb-3">
                  Order Summary ({cartItems.length} Item)
                </h3>

                <div className="space-y-1 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>₹{totalPrice}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Discount</p>
                    <p className="text-pink-500">− ₹450</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Shipping</p>
                    <p className="text-gray-500">Free</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Platform Fee</p>
                    <p>₹25</p>
                  </div>
                </div>

                <hr className="my-3" />

                <div className="flex justify-between text-base font-semibold text-gray-900">
                  <p>Total</p>
                  <p>₹{totalPrice - 450 + 25}</p>
                </div>

                <button
                  onClick={() => {
                    const token = localStorage.getItem("token");
                    if (!token) {
                      navigate("/login");
                    } else {
                      
                      navigate("/address");
                    }
                  }}
                  className="mt-4 w-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-orange-400 hover:opacity-90 text-white py-2 rounded-sm font-medium text-sm tracking-wide shadow-md transition-all duration-200"
                >
                  Proceed to Payment
                </button>
              </div>

              {/* Offers Section */}
              <div className="bg-white border border-gray-200 p-4 rounded-md shadow-sm">
                <h3 className="text-base font-semibold text-gray-800 mb-2">
                  Offers & Deals
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Get{" "}
                  <span className="text-pink-500 font-semibold">
                    extra 10% cashback
                  </span>{" "}
                  on HDFC Credit Card purchases above ₹2500.
                </p>
                <button className="text-pink-500 text-sm mt-1 hover:underline">
                  View More Offers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
