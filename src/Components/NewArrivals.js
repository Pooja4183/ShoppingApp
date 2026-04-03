import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductRequest } from "../Redux/Products/productFetchActions";
import { useLocation } from "react-router-dom";

const NewArrivals = () => {
const { products } = useSelector((state) => state.products);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if(!window.location.search){
        dispatch(fetchProductRequest({}))
    }
   
   }, [dispatch]);

  return (
    <div className="px-10 py-12 bg-[#f9f9f9]">
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {Array.isArray(products) &&
        products.slice(0, 6).map((item) => (
          <div
            key={item._id}
            className="bg-white cursor-pointer rounded-xl"
            onClick={() => navigate("/Prodectdetails/" + item._id)}
          >
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
              {/* <p className="text-gray-600 text-xs pb-1"> {item.rating.rate} ★ |</p> */}
              <h2 className="card-title text-sm line-clamp-2 mb-2 min-h-[2em]">
                {item.title}
              </h2>

              <div className="text-sm font-semibold">${item.price}</div>
              <div className="card-actions justify-end mt-2">

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="flex justify-right mt-8">
        <button
          onClick={() => navigate("/all-products")}
          className="btn btn-outline btn-secondary"
        >
          See More
        </button>
      </div> */}
    </div>
  );
};

export default NewArrivals;