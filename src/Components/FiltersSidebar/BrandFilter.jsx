import { useState } from "react";

const BrandFilter = ({ brands = [], onChange, selected = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleBrands = showAll ? brands : brands.slice(0, 7);

  const handleBrandChange = (brand) => {
    let updatedBrands;

    if (selected.includes(brand)) {
      updatedBrands = selected.filter((b) => b !== brand);
    } else {
      updatedBrands = [...selected, brand];
    }

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
          visibleBrands.map((brandobj, index ) => {
            console.log("brandobj:", brandobj);
            const name = brandobj?.name || brandobj; // works for both
            const count = brandobj?.count || 0;
            return (
              <label
                key={index}
                className="flex items-center gap-3 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded"
              >
                <input
                  type="checkbox"
                  className="accent-pink-500 w-4 h-4 cursor-pointer"
                  checked={selected.includes(name)}
                  onChange={() => handleBrandChange(name)}
                />

                <span className="text-gray-700 flex-1">{name}</span>

                <span className="text-gray-400 text-xs">
                  ({count})
                </span>
              </label>
            );
          })
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
