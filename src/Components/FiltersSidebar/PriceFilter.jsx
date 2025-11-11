import { useState } from "react";

const PriceFilter = ({ min = 0, max = 10000, step = 500, onChange }) => {
  const [priceRange, setPriceRange] = useState([min, max]);

  const handleMinChange = (e) => {
    const newMin = Number(e.target.value);
    const updated = [newMin, priceRange[1]];
    setPriceRange(updated);
    onChange("price", updated);
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    const updated = [priceRange[0], newMax];
    setPriceRange(updated);
    onChange("price", updated);
  };

  return (
    <div className="border-b pb-4 mb-4">
      <h3 className="font-semibold text-gray-800 mb-3 uppercase text-sm">
        Price
      </h3>

      {/* Range Display */}
      <div className="flex justify-between text-xs text-gray-600 mb-2">
        <span>₹{priceRange[0]}</span>
        <span>₹{priceRange[1]}</span>
      </div>

      {/* Dual Range Slider */}
      <div className="relative h-2 bg-gray-200 rounded-md mb-4">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={priceRange[0]}
          onChange={handleMinChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: priceRange[0] > max - 1000 ? 5 : 1 }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={priceRange[1]}
          onChange={handleMaxChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-none"
        />
      </div>

      {/* Range Inputs */}
      <div className="flex items-center justify-between gap-2 text-sm">
        <input
          type="number"
          value={priceRange[0]}
          min={min}
          max={priceRange[1]}
          step={step}
          onChange={handleMinChange}
          className="w-1/2 border px-2 py-1 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
        />
        <input
          type="number"
          value={priceRange[1]}
          min={priceRange[0]}
          max={max}
          step={step}
          onChange={handleMaxChange}
          className="w-1/2 border px-2 py-1 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-pink-400"
        />
      </div>
    </div>
  );
};

export default PriceFilter;
