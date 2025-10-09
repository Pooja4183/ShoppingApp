// import { useEffect } from "react";
import ProductCard from "./ProductCard";

const ProductListing = ({ products = [],category}) => {

  return (
    <>
      <div className="px-10 py-12 bg-[#f9f9f9]">
        <h2 className="text-2xl font-bold mb-6">Product listing</h2>
          {category ? `${category} Products` : "All Products"}

        <div className="flex gap-6">
          {/* Left sidebar for filters */}
          <div className="w-[220px] hidden xl:block">
            <div className="bg-white rounded-xl shadow p-4 text-sm text-gray-600">
              <p>Filters coming soon...</p>
            </div>
          </div>

          {/* Product grid - 5 columns on xl screens */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products.length > 0 ? (
            products.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))
          ) : (
            <p>No products found.</p>
          )}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListing;
