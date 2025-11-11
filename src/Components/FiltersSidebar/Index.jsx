import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";

const FilterSidebar = ({filtersData,onFilterChange}) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto h-screen sticky top-0">
      <h2 className="text-lg font-semibold mb-4">FILTERS</h2>
      <GenderFilter genders={filtersData.genders} onChange={onFilterChange} />
      <CategoryFilter categories={filtersData.categories} onChange={onFilterChange} />
      <BrandFilter brands={filtersData.brand} onChange={onFilterChange} />
      <PriceFilter prices={filtersData.prices} onChange={onFilterChange} />
      <ColorFilter colors={filtersData.colors} onChange={onFilterChange} />
    </aside>
  );
};

export default FilterSidebar;
