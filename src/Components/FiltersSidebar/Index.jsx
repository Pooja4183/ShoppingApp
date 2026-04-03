import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
// import GenderFilter from "./GenderFilter";

const FilterSidebar = ({
  filtersData,
  onFilterChange,
  loading,
  selectedFilters,
}) => {
  if (loading) return <p>Loading filters...</p>;

  const updateFilters = (newPartialFilter) => {
    const normalizedFilter = { ...newPartialFilter };

    // 🔥 Normalize brand → always string array
    if (normalizedFilter.brand) {
      normalizedFilter.brand = normalizedFilter.brand.map((b) =>
        typeof b === "object" ? b.name : b,
      );
    }

    const updatedFilters = {
      ...selectedFilters,
      ...normalizedFilter,
    };

    // remove empty filters
    Object.keys(updatedFilters).forEach((key) => {
      if (
        updatedFilters[key] === undefined ||
        updatedFilters[key]?.length === 0
      ) {
        delete updatedFilters[key];
      }
    });

    onFilterChange(updatedFilters);
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto h-screen sticky top-0">
      <h2 className="text-lg font-semibold mb-4">FILTERS</h2>
      {/* <GenderFilter
        genders={filtersData.genders}
        onChange={updateFilters}
      /> */}
      <BrandFilter
        brands={filtersData.brands || []}
        onChange={updateFilters}
        selected={selectedFilters.brand || []}
      />
      <PriceFilter prices={filtersData.prices} onChange={updateFilters} />
      <ColorFilter
        colors={filtersData.colors || []}
        onChange={updateFilters}
        selected={selectedFilters.color || []}
      />

      {/* <CategoryFilter categories={filtersData.categories} onChange={onFilterChange} /> */}
    </aside>
  );
};

export default FilterSidebar;
