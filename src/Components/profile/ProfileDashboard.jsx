import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";

import ProfileSidebar from "./ProfileSidebar";
import ProfileInfo from "./ProfileInfo";
import ProfileOrders from "./ProfileOrders";
import ProfileAddress from "./ProfileAddress";

const ProfileDashboard = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) setActiveTab(tab);
  }, [searchParams]);

  const renderContent = () => {
    switch (activeTab) {
      case "orders":
        return <ProfileOrders />;
      case "address":
        return <ProfileAddress />;
      default:
        return <ProfileInfo />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f7fb]">

      {/* ================= HEADER ================= */}
      <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 h-32 md:h-36 rounded-b-[28px]">

        <div className="max-w-6xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">

          {/* Mobile Menu */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu size={22} />
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3 text-white">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-sm font-semibold">
              P
            </div>

            <div>
              <h2 className="text-base md:text-lg font-semibold">
                Welcome Back
              </h2>
              <p className="text-white/80 text-xs mt-0.5">
                poojatomarjs@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm py-4 grid grid-cols-3 text-center">

          <motion.div
            whileHover={{ y: -2 }}
            onClick={() => setActiveTab("orders")}
            className="cursor-pointer"
          >
            <p className="text-lg font-semibold text-gray-900">
              12
            </p>
            <p className="text-[11px] text-gray-500 mt-1 tracking-wide">
              Orders
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <p className="text-lg font-semibold text-gray-900">
              5
            </p>
            <p className="text-[11px] text-gray-500 mt-1 tracking-wide">
              Wishlist
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -2 }}>
            <p className="text-lg font-semibold text-gray-900">
              3
            </p>
            <p className="text-[11px] text-gray-500 mt-1 tracking-wide">
              Notifications
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-12 flex gap-8">

        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64">
          <ProfileSidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/25 z-40 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
              />

              <motion.div
                className="fixed top-0 left-0 h-full w-64 bg-white z-50 p-6 md:hidden shadow-lg"
                initial={{ x: -260 }}
                animate={{ x: 0 }}
                exit={{ x: -260 }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
              >
                <ProfileSidebar
                  activeTab={activeTab}
                  setActiveTab={(tab) => {
                    setActiveTab(tab);
                    setIsSidebarOpen(false);
                  }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Content Card */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
