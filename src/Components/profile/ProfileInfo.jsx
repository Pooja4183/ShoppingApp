import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin } from "lucide-react";

const ProfileInfo = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div>

      {/* ===== Header ===== */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Profile Information
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Manage your personal details
          </p>
        </div>

        <button
          className="
            px-4 py-1.5
            text-sm font-medium
            rounded-md
            bg-violet-600
            text-white
            hover:bg-violet-700
            transition
          "
        >
          Edit
        </button>
      </div>

      {/* ===== Info Card ===== */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="
          bg-white
          rounded-xl
          border border-gray-100
          divide-y divide-gray-100
        "
      >

        {/* Full Name */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-violet-100 flex items-center justify-center">
              <User size={16} className="text-violet-600" />
            </div>
            <span className="text-sm text-gray-500">
              Full Name
            </span>
          </div>

          <span className="text-sm font-medium text-gray-900">
            {user?.name || "Not Added"}
          </span>
        </div>

        {/* Mobile */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-violet-100 flex items-center justify-center">
              <Phone size={16} className="text-violet-600" />
            </div>
            <span className="text-sm text-gray-500">
              Mobile Number
            </span>
          </div>

          <span className="text-sm font-medium text-gray-900">
            {user?.mobile || "Not Added"}
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-violet-100 flex items-center justify-center">
              <Mail size={16} className="text-violet-600" />
            </div>
            <span className="text-sm text-gray-500">
              Email Address
            </span>
          </div>

          <span className="text-sm font-medium text-gray-900 break-all">
            {user?.email || "Not Added"}
          </span>
        </div>

        {/* Gender */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-violet-100 flex items-center justify-center">
              <User size={16} className="text-violet-600" />
            </div>
            <span className="text-sm text-gray-500">
              Gender
            </span>
          </div>

          <span className="text-sm font-medium text-gray-900">
            {user?.gender || "Not Added"}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-violet-100 flex items-center justify-center">
              <MapPin size={16} className="text-violet-600" />
            </div>
            <span className="text-sm text-gray-500">
              Location
            </span>
          </div>

          <span className="text-sm font-medium text-gray-900">
            {user?.location || "Not Added"}
          </span>
        </div>

      </motion.div>

    </div>
  );
};

export default ProfileInfo;
