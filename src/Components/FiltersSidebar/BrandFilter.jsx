import { useState } from "react";

const BrandFilter = ({ brands = [], onChange }) => {
  // Store selected brands (user may select multiple)
  const [selectedBrands, setSelectedBrands] = useState([]);

  const [showAll, setShowAll] = useState(false);

  // Show only 7 items initially
  const visibleBrands = showAll ? brands : brands.slice(0, 7);

  // ----------------------------
  // Handle checkbox change
  // ----------------------------
  const handleBrandChange = (brand) => {
    let updatedBrands = [];

    // If brand already selected → remove it (uncheck)
    if (selectedBrands.includes(brand)) {
      updatedBrands = selectedBrands.filter((b) => b !== brand);
    } else {
      // If not selected → add it
      updatedBrands = [...selectedBrands, brand];
    }

    // Update local state
    setSelectedBrands(updatedBrands);

    // Send full filters object to Parent
    // Example: { brand: ["ZARA", "NIKE"] }
    onChange({
      brand: updatedBrands,
    });
  };

  return (
    <div className="border-b pb-4 mb-4">
      <h3 className="font-semibold text-gray-800 uppercase text-sm mb-3">
        Brand
      </h3>

      <div className="space-y-1">
        {visibleBrands.length > 0 ? (
          visibleBrands.map((brand, index) => (
            <label
              key={index}
              className="flex items-center gap-3 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded"
            >
              {/* Checkbox */}
              <input
                type="checkbox"
                className="accent-pink-500 w-4 h-4 cursor-pointer"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />

              {/* Brand Name */}
              <span className="text-gray-700 flex-1">{brand}</span>

              {/* Fake product count */}
              <span className="text-gray-400 text-xs">
                ({Math.floor(Math.random() * 40000 + 2000)})
              </span>
            </label>
          ))
        ) : (
          <p className="text-gray-400 text-sm">No brands available</p>
        )}
      </div>

      {brands.length > 7 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-pink-500 text-sm mt-2 font-medium"
        >
          {showAll ? "Show Less" : `+ ${brands.length - 7} more`}
        </button>
      )}
    </div>
  );
};

export default BrandFilter;
