import { useNavigate, useLocation } from "react-router-dom";

const Pagination = ({ currentPage, totalPages }) => {
  const navigate = useNavigate();
  const { search } = useLocation();

  if (!totalPages) return null;

  const handlePageChange = (page) => {
    const queryParams = new URLSearchParams(search);
    queryParams.set("page", page);

    navigate(`/products?${queryParams.toString()}`);
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center gap-2 py-6">
      
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded ${
            currentPage === page
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;