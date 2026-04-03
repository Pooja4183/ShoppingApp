const Topbar = () => {
  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="font-semibold text-lg">Admin Dashboard</h1>

      <button className="text-sm text-red-500 hover:underline">
        Logout
      </button>
    </div>
  );
};

export default Topbar;