import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const [hoveredId, setHoveredId] = useState(false);
  const navigate = useNavigate();
  return (
      <div
          className="bg-white cursor-pointer rounded-xl shadow hover:shadow-md transition relative"
          onClick={() => navigate("/Prodectdetails/" + item._id)}
          onMouseEnter={() => setHoveredId(true)}
          onMouseLeave={() => setHoveredId(false)}
        >
          {/* Wishlist Icon on Hover */}
          {hoveredId && (
            <div className="absolute top-2 right-2 text-lg text-gray-500 hover:text-red-500 z-10">
              ♥
            </div>
          )}
          <figure className="flex justify-center items-center h-48 overflow-hidden rounded-t-xl">
            {item.images?.length > 0 ? (
              <img
                src={item.images[0]?.url}
                alt={item.title}
                className="h-full object-contain"
              />
            ) : (
              <span className="text-gray-400">No image</span>
            )}
          </figure>

          <div className="px-3 mt-2 text-left">
            <div className="flex items-center text-gray-600 text-xs pb-1 space-x-1">
              <span className="bg-green-600 text-white px-1 rounded text-[11px] font-bold flex items-center gap-0.5">
                {/* {item.rating.rate} ★ */}
              </span>
              <span className="text-gray-500 text-[11px]">
                {/* | {item.rating.count} */}
              </span>
            </div>

            <h2 className="card-title text-sm line-clamp-2 mb-2 min-h-[2em]">
              {item.title}
            </h2>

            <div className="flex items-center gap-2 text-sm font-semibold mt-1">
              <span className="text-black">₹{item.price}</span>
              <span className="text-gray-500 line-through text-[11px]">
                ₹{Math.round(item.price * 1.3)}
              </span>
              <span className="text-red-400 text-[11px] font-sm">
                (30% OFF)
              </span>
            </div>

            <div className="card-actions justify-end mt-2"></div>
          </div>
        </div>
     
  );
};

export default ProductCard;
