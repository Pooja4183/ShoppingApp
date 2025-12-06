// import { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductListing = ({ products = [],filteredProducts, category,loading }) => {

  

  const finalProducts = filteredProducts.length > 0 ? filteredProducts : products;
  return (
    <>
      <div className="px-10 py-12">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {finalProducts.length > 0 ? (
            finalProducts.map((item) => <ProductCard key={item._id} item={item} />)
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductListing;
