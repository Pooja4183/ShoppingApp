import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import ProductListing from "../Components/ProductListing";
import { fetchProductRequest } from "../Redux/actions/productFetchActions";
import { useEffect } from "react";
import { fetchCategoryRequest } from "../Redux/actions/categoryAction";
import FilterSidebar from "../Components/FiltersSidebar/Index";
import { filteredCategoryRequest } from "../Redux/actions/filterCategoryAction";
import { sidebarFiltersRequest } from "../Redux/actions/sidebarFiltersAction";

const ProductDashboard = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("search");
  const dispatch = useDispatch();
  const { categoryName } = useParams();

// when user clicks on any category from the navbar for example men , men category products will be displayyed.
  const { categoryListProduct, loading: categoryLoading } = useSelector(
    (state) => state.categoryListProduct
  );
  

// thesere the filtered products when user clicks on checkbox
  const filterdProduct = useSelector(
    (state) => state.filterdProduct.filterdProduct
  );
  console.log("checking if the products available 2:", filterdProduct);

  // filters options list available fro the selected category , for example: women
  const {
    list: filtersData,
    loading: filtersLoading,
    error,
  } = useSelector((state) => state.filters);

  const handleApplyFilters = (categoryName, filters) => {
    dispatch(filteredCategoryRequest(categoryName, filters));
  };

  useEffect(() => {
    if (categoryName) {
      dispatch(fetchCategoryRequest(categoryName));
       dispatch(sidebarFiltersRequest(categoryName));
    } else if (query) {
      dispatch(fetchProductRequest({ search: query }));
     
    }
  }, [categoryName, query, dispatch]);

  return (
    <>
      <div className="flex">
        <div className="w-[250px] hidden xl:block">
          <FilterSidebar
             onFilterChange={handleApplyFilters}
            filtersData={filtersData}
            loading={filtersLoading}
          />
        </div>
        <div className="flex-1">
          <ProductListing
            category={categoryName}
            products={categoryListProduct}
             filteredProducts={filterdProduct}
            loading={categoryLoading}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDashboard;
