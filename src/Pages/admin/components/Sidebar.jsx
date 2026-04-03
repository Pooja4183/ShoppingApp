import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>

      <nav className="p-4 space-y-2">
        <NavLink
          to="/admin/products/create"
          className={({ isActive }) =>
            `block p-2 rounded ${
              isActive ? "bg-black text-white" : "hover:bg-gray-200"
            }`
          }
        >
          Create Product
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;