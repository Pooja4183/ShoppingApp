import Footer from "../Components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import ProductListing from "../Components/ProductListing";
import { fetchProductRequest } from "../Redux/Products/productFetchActions";
import { useEffect } from "react";
import FilterSidebar from "../Components/FiltersSidebar/Index";
import { sidebarFiltersRequest } from "../Redux/sidebarFilters/sidebarFiltersAction";
import SortDropdown from "../Components/FiltersSidebar/Sorting";
import Pagination from "../Components/FiltersSidebar/Pagination";

const ProductDashboard = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Parse all filters from URL (Single Source of Truth)
  const params = new URLSearchParams(search);
  const brand = params.get("brand")
    ? params
        .get("brand")
        .split(",")
        .map((b) => {
          try {
            const parsed = JSON.parse(b);
            return typeof parsed === "object" ? parsed.name : b;
          } catch {
            return b;
          }
        })
    : [];

  const category = params.get("category");
  // const brand = params.get("brand")?.split(",") || [];
  const color = params.get("color")?.split(",") || [];
  const searchQuery = params.get("search");
  const priceMin = params.get("priceMin");
  const priceMax = params.get("priceMax");
  const sort = params.get("sort");
  const page = params.get("page") || 1;

  // Redux state
  const { products, loading, pagination } = useSelector(
    (state) => state.products,
  );

  const { list: filtersData, loading: filtersLoading } = useSelector(
    (state) => state.filters,
  );

  // ✅ Handle filter change → Update URL (NOT Redux directly)
  const handleApplyFilters = (filters) => {
    console.log("PArams>>", params);
    // Preserve existing params
    const queryParams = new URLSearchParams();

    if (category) queryParams.set("category", category);

    if (filters.brand?.length)
      queryParams.set(
        "brand",
        filters.brand
          .map((b) => (typeof b === "object" ? b.name : b))
          .join(","),
      );
    // queryParams.set("brand", filters.brand.join(","));

    if (filters.color?.length)
      queryParams.set("color", filters.color.join(","));

    if (filters.priceMin) queryParams.set("priceMin", filters.priceMin);

    if (filters.priceMax) queryParams.set("priceMax", filters.priceMax);

    // Reset page when filters change
    queryParams.set("page", 1);

    // Update URL → triggers useEffect
    navigate(`/products?${queryParams.toString()}`);
  };

  // Fetch products whenever URL changes
  useEffect(() => {
    const requestObj = {
      category,
      brand: brand.length ? brand.join(",") : undefined,
      color: color.length ? color.join(",") : undefined,
      search: searchQuery,
      priceMin,
      priceMax,
      sort,
      page,
    };
    console.log("Category..", category);
    dispatch(fetchProductRequest(requestObj));

    // Fetch sidebar filters based on category
    if (category) {
      console.log("Calling Sidebar dispacth");
      dispatch(sidebarFiltersRequest(category));
    }
  }, [search, dispatch]); // 🔥 KEY DEPENDENCY

  return (
  <>
    {/* Header */}
    <div className="w-full px-3 xl:px-6 pt-4">
      <h2 className="text-lg font-semibold text-gray-800">
        {category || "Products"}
        <span className="ml-2 text-gray-500 font-normal text-sm">
          ({pagination?.total || 0} items)
        </span>
      </h2>
    </div>

    {/* Sort */}
    <div className="w-full px-3 xl:px-6 flex justify-end py-2">
      <SortDropdown sort={sort} />
    </div>

    {/* Main Layout */}
   <div className="w-full px-2 xl:px-4 flex gap-4">

  {/* Sidebar */}
  <div className="w-[220px] hidden xl:block flex-shrink-0">
    <div className="sticky top-20">
      <FilterSidebar
        onFilterChange={handleApplyFilters}
        filtersData={filtersData}
        loading={filtersLoading}
        selectedFilters={{
          brand,
          color,
          priceMin,
          priceMax,
        }}
      />
    </div>
  </div>

  {/* Product Listing */}
  <div className="flex-1 min-w-0">
    <ProductListing products={products} loading={loading} />
  </div>

</div>

    {/* Pagination */}
    <div className="mt-6 flex justify-center">
      <Pagination
        currentPage={page}
        totalPages={pagination?.totalPages}
      />
    </div>

    {/* Footer */}
    <Footer />
  </>
);
};

export default ProductDashboard;
