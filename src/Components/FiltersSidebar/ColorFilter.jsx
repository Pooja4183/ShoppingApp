import { useState } from "react";
import { Search } from "lucide-react";

const ColorFilter = ({ colors = [], onChange }) => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredColors = colors.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );
  const visibleColors = showAll ? filteredColors : filteredColors.slice(0, 10);

  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-gray-800 uppercase text-sm">Color</h3>

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
          placeholder="Search color"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border w-full text-sm px-2 py-1 rounded-md mb-2 focus:outline-none focus:ring-1 focus:ring-pink-400"
        />
      )}

      {/* Color Options */}
      <div className="space-y-1">
        {visibleColors.map((color) => (
          <label
            key={color.name}
            className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded"
          >
            <input
              type="checkbox"
              className="accent-pink-500"
              onChange={() => onChange("color", color.name)}
            />
            <span
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{ backgroundColor: color.hex }}
            ></span>
            <span className="text-gray-700 flex-1">{color.name}</span>
            {color.count && (
              <span className="text-gray-400 text-xs">({color.count})</span>
            )}
          </label>
        ))}
      </div>

      {/* Show More / Less */}
      {filteredColors.length > 10 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-pink-500 text-sm mt-2 font-medium"
        >
          {showAll ? "Show Less" : `+ ${filteredColors.length - 10} more`}
        </button>
      )}
    </div>
  );
};

export default ColorFilter;
