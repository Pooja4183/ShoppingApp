import { useState } from "react";
import { Search } from "lucide-react";

const BrandFilter = ({ brands = [], onChange }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredBrands = brands.filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase())
  );
  const visibleBrands = showAll ? filteredBrands : filteredBrands.slice(0, 10);

  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800 uppercase text-sm">Brand</h3>

        {/* Search Icon Toggle */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="text-gray-500 hover:text-pink-500"
        >
          <Search size={16} />
        </button>
      </div>

      {/* Search Input (only visible when icon clicked) */}
      {searchOpen && (
        <input
          type="text"
          placeholder="Search brand"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-full text-sm px-2 py-1 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
        />
      )}

      {/* Brands Options */}
      <div className="space-y-1">
        {visibleBrands.map((brand) => (
          <label
            key={brand.name}
            className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded"
          >
            <input
              type="checkbox"
              className="accent-pink-500"
              onChange={() => onChange("color", brand.name)}
            />
            <span
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: brand.hex }}
            ></span>
            <span className="text-gray-700 flex-1">{brand.name}</span>
            {brand.count && (
              <span className="text-gray-400 text-xs">({brand.count})</span>
            )}
          </label>
        ))}
      </div>

      {/* Show More / Less */}
      {filteredBrands.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-pink-500 text-sm mt-2 font-medium"
        >
          {showAll ? "Show Less" : `+ ${filteredBrands.length - 10} more`}
        </button>
      )}
    </div>
  );
};

export default BrandFilter;
