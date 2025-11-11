import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ProductListing from "../Components/ProductListing";
import { fetchProductRequest } from "../Redux/actions/productFetchActions";
import { useEffect } from "react";
import { fetchCategoryRequest } from "../Redux/actions/categoryAction";
import FilterSidebar from "../Components/FiltersSidebar/Index";
import { filteredCategoryRequest } from "../Redux/actions/filterCategoryAction";

const ProductDashboard = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("search");
  const dispatch = useDispatch();
  const { categoryName } = useParams();

  // const searchResults = useSelector((state) => state.searchResult.searchResult);

  const { categoryListProduct, loading } = useSelector(
    (state) => state.categoryListProduct
  );

  const { filterdProduct } = useSelector(
    (state) => state.filterdProduct
  );
  console.log("checking if the products available 2:", filterdProduct);

  const filtersData = useSelector((state) => state.filtersList);
  console.log("filters data 3 ", filtersData);

  const handleApplyFilters = (categoryName, filters) => {
    dispatch(filteredCategoryRequest(categoryName, filters));
  };

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchCategoryRequest(categoryName));
    } else if (query) {
      dispatch(fetchProductRequest({ search: query }));

      // } else if (filters){
      //   dispatch(filteredCategoryRequest(filters));

      // } else {
      dispatch(fetchProductRequest());
    }
  }, [categoryName, query, dispatch]);

  return (
    <>
      <div className="flex">
        <div className="w-[250px] hidden xl:block">
          <FilterSidebar
            onFilterChange={handleApplyFilters}
            filtersData={filtersData}
          />
        </div>
        <div className="flex-1">
          <ProductListing
            category={categoryName}
            products={categoryListProduct}
            loading={loading}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDashboard;
