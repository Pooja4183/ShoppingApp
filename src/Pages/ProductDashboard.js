import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ProductListing from "../Components/ProductListing";
import { fetchProductRequest } from "../Redux/actions/productFetchActions";
import { useEffect } from "react";
import { fetchCategoryRequest } from "../Redux/actions/categoryAction";

const ProductDashboard = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("search");
  const dispatch = useDispatch();
  const { categoryName } = useParams();
  console.log("categoryList", categoryName);

  const { products } = useSelector((state) => state.products);

  const searchResults = useSelector((state) => state.searchResult.searchResult);

  const categorylist = useSelector(
    (state) => state.categoryList.categoryListProduct
  );

  console.log("testing category ", categorylist);
  useEffect(() => {
    if (categoryName) {
      dispatch(fetchCategoryRequest(categoryName ));
    } else if (query) {
      dispatch(fetchProductRequest({ search: query }));
    } else {
      dispatch(fetchProductRequest());
    }
  }, [dispatch, categoryName, query]);

  const dataToRender = categoryName
    ? categorylist
    : query
    ? searchResults
    : products;

  return (
    <>
      <ProductListing category={categoryName} products={dataToRender} />
      <Footer />
    </>
  );
};

export default ProductDashboard;
