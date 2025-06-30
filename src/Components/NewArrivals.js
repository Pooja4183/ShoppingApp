import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();
      setProductList(result);
    } catch (error) {
      console.error("Error Fetching data: ", error);
    }
  };

  return (
    <div className="px-10 py-12 bg-[#f9f9f9]">
      <h2 className="text-2xl font-bold mb-4">New Arrivals</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {productList.slice(0, 6).map((item) => (
          <div
            key={item.id}
            className="bg-white cursor-pointer rounded-xl"
            onClick={() => navigate("/Prodectdetails/" + item.id)}
          >
            <figure className="flex justify-center items-center h-48 overflow-hidden rounded-t-xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-full object-contain"
              />
            </figure>

            <div className="px-3 mt-2 text-left">
              <p className="text-gray-600 text-xs pb-1">Rating: {item.rating.rate} ★</p>
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

      <div className="flex justify-center mt-8">
        <button
          onClick={() => navigate("/all-products")}
          className="btn btn-outline btn-secondary"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;