// import { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductListing = ({ products = [], loading }) => {
  return (
    <>
      <div className="px-14 ">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.length > 0 ? (
            products.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
