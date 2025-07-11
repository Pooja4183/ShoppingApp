import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AddToCart() {
  const addToCartItems = useSelector((state) => state.cart.cartProduct);

  return (
    <Link
      to="/cart"
      className="flex flex-col items-center relative text-xs font-medium text-black"
    >
      <FaShoppingBag size={18} className="hover:text-pink-600" />
      Bag
      {addToCartItems.reduce((total, item) => total + item.quantity, 0) > 0 && (
        <span className="absolute -top-1 right-0 bg-red-600 text-white text-[10px] px-1 rounded-full">
          {addToCartItems.reduce((total, item) => total + item.quantity, 0)}
        </span>
      )}
    </Link>
  );
}

export default AddToCart;
