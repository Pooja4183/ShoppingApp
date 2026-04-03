import { useState } from "react";

const ColorFilter = ({ colors = [], onChange, selected = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleColors = showAll ? colors : colors.slice(0, 7);

  const colorHexMap = {
    Black: "#2F3640",
    Blue: "#007BFF",
    White: "#FFFFFF",
    Pink: "#FFC0CB",
    Green: "#28A745",
    Beige: "#F5F5DC",
    Red: "#FF4D4D",
    Peach: "#FFDAB9",
    "Off white": "#FAF9F6",
    "Olive green": "#708238",
    "Neon pink": "#FF6EC7",
  };

  const handleColorChange = (colorName) => {
    let updatedColors;

    if (selected.includes(colorName)) {
      updatedColors = selected.filter((c) => c !== colorName);
    } else {
      updatedColors = [...selected, colorName];
    }

    onChange({
      color: updatedColors,
    });
  };

  return (
    <div className="border-b pb-4 mb-4">
      <h3 className="font-semibold text-gray-800 uppercase text-sm mb-3">
        Color
      </h3>

      <div className="space-y-1">
        {visibleColors.length > 0 ? (
          visibleColors.map((colorObj, index) => {
            const name =
              typeof colorObj === "object"
                ? colorObj.name
                : colorObj;

            const count =
              typeof colorObj === "object"
                ? colorObj.count
                : 0;

            return (
              <label
                key={index}
                className="flex items-center gap-3 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded"
              >
                <input
                  type="checkbox"
                  className="accent-pink-500 w-4 h-4 cursor-pointer"
                  checked={selected.includes(name)}
                  onChange={() => handleColorChange(name)}
                />

                <span
                  className="w-4 h-4 rounded-full border"
                  style={{
                    backgroundColor: colorHexMap[name] || "#E5E5E5",
                  }}
                ></span>

                <span className="text-gray-700 flex-1">{name}</span>

                <span className="text-gray-400 text-xs">
                  ({count})
                </span>
              </label>
            );
          })
        ) : (
          <p className="text-gray-400 text-sm">No colors available</p>
        )}
      </div>

      {colors.length > 7 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-pink-500 text-sm mt-2 font-medium"
        >
          {showAll ? "Show Less" : `+ ${colors.length - 7} more`}
        </button>
      )}
    </div>
  );
};

export default ColorFilter;