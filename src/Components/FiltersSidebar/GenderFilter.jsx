import { useState } from "react";

const GenderFilter = ({ genders = [], onChange }) => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleChange = (gender) => {
    setSelectedGender(gender);
    onChange("gender", gender);
  };

  return (
    <div className="border-b pb-4 mb-4">
      <h3 className="font-semibold text-gray-800 mb-2 uppercase text-sm">
        Gender
      </h3>

      <div className="space-y-2">
        {genders.map((gender) => (
          <label
            key={gender.name}
            className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 p-1 rounded"
          >
            <input
              type="radio"
              name="gender"
              value={gender.name}
              checked={selectedGender === gender.name}
              onChange={() => handleChange(gender.name)}
              className="accent-pink-500"
            />
            <span className="text-gray-700 flex-1">{gender.name}</span>
            {gender.count && (
              <span className="text-gray-400 text-xs">({gender.count})</span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default GenderFilter;
