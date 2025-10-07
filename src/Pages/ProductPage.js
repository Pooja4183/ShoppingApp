import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ProductListing from "../Components/ProductListing";

const ProductPage = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("search");

  const searchResults = useSelector(state => state.searchResult.searchResult);

  return (
    <>
      {query ? (
        <ProductListing searchProduct={searchResults} />
      ) : (
        <div className="text-center py-10 text-gray-500">
         Please search for a product.
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProductPage;
