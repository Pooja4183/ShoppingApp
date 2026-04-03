import { useLocation, useNavigate } from "react-router-dom";

const SortDropdown = ({ sort }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const options = [
    { label: "Recommended", value: "" },
    { label: "Price: Low → High", value: "price_asc" },
    { label: "Price: High → Low", value: "price_desc" },
    { label: "Top Rated", value: "rating_desc" },
  ];

  const selectedLabel =
    options.find((opt) => opt.value === sort)?.label || "Recommended";

  const handleSortChange = (value) => {
    const queryParams = new URLSearchParams(search);

    if (value) queryParams.set("sort", value);
    else queryParams.delete("sort");

    queryParams.set("page", 1);

    navigate(`/products?${queryParams.toString()}`);
  };

  return (
    <div className="relative group inline-block">
      {/* Trigger */}
      <div className="cursor-pointer px-4 py-2 border rounded bg-white">
        <span className="text-gray-500">Sort by : </span>
        <span className="font-semibold">{selectedLabel}</span>
      </div>

      {/* Dropdown */}
      <div className="absolute hidden group-hover:block bg-white border shadow-md mt-1 w-56 z-50">
        {options.map((opt) => (
          <div
            key={opt.value}
            onClick={() => handleSortChange(opt.value)}
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              sort === opt.value ? "font-semibold text-blue-600" : ""
            }`}
          >
            {opt.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;