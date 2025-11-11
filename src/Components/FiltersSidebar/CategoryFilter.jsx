import { useState } from "react";

const CategoryFilter = ({ categories = [], onChange }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <div className="border-b pb-3 mb-4">
      <h3 className="font-semibold text-gray-800 mb-2 uppercase text-sm">
        Categories
      </h3>
      <div className="space-y-1">
        {visibleCategories.map((cat) => (
          <label key={cat.name} className="flex items-center gap-2 cursor-pointer text-sm">
            <input
              type="checkbox"
              className="accent-pink-500"
              onChange={() => onChange("category", cat.name)}
            />
            <span className="text-gray-600">
              {cat.name} <span className="text-gray-400 text-xs">({cat.count})</span>
            </span>
          </label>
        ))}
      </div>
      {categories.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-pink-500 text-sm mt-2 font-medium"
        >
          {showAll ? "Show Less" : `+ ${categories.length - 8} more`}
        </button>
      )}
    </div>
  );
};

export default CategoryFilter;
