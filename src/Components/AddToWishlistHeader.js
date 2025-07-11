import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function AddToWishlistHeader() {
  const wishListItem = useSelector((state) => state.wishList.wishListItmes);

  

  return (
    <Link
      to="/wishlist"
      className="flex flex-col items-center relative text-xs font-medium text-black"
    >
      <FaHeart size={18} className="hover:text-pink-600" />
      Wishlist

      {wishListItem.length > 0 && (
  <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] px-1 rounded-full">
    {wishListItem.length}
  </span>
)}
    </Link>
  );
}

export default AddToWishlistHeader;
