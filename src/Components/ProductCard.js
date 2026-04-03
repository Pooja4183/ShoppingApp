import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [hoveredId, setHoveredId] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="bg-white cursor-pointer transition relative"
      onClick={() => navigate("/Prodectdetails/" + item._id)}
      onMouseEnter={() => setHoveredId(true)}
      onMouseLeave={() => setHoveredId(false)}
    >
      {/* Wishlist Icon */}
      {hoveredId && (
        <div className="absolute top-2 right-2 text-sm text-gray-500 hover:text-red-500 z-10">
          ♥
        </div>
      )}

      {/* Image FIXED */}
      <figure className="w-full aspect-[4/5] overflow-hidden bg-gray-100">
        {item.images?.length > 0 ? (
          <img
            src={item.images[0]?.url}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No image
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="px-2 pt-2 pb-3 text-left">
        <h2 className="text-[13px] line-clamp-2 min-h-[32px] text-gray-800 leading-snug">
          {item.title}
        </h2>

        <div className="flex items-center gap-2 text-[13px] font-semibold mt-1">
          <span className="text-black">₹{item.price}</span>
          <span className="text-gray-400 line-through text-[11px]">
            ₹{Math.round(item.price * 1.3)}
          </span>
          <span className="text-red-500 text-[11px]">(30% OFF)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;