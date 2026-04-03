import { motion } from "framer-motion";

const ProfileSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { key: "profile", label: "Profile Info" },
    { key: "orders", label: "My Orders" },
    { key: "address", label: "My Addresses" },
  ];

  return (
    <div
      className="
      bg-white 
      rounded-3xl 
      shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] 
      border border-gray-100 
      p-6"
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-6">
        My Account
      </h3>

      {/* Menu List */}
      <ul className="space-y-3">
        {menuItems.map((item) => {
          const isActive = activeTab === item.key;

          return (
            <li key={item.key}>
              <motion.button
                whileHover={{ x: 4 }}
                onClick={() => setActiveTab(item.key)}
                className={`
                  w-full text-left px-4 py-2 rounded-xl transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-50 to-violet-50 text-violet-700 font-medium shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                {item.label}
              </motion.button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
