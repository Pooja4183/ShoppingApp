import { motion } from "framer-motion";

const dummyAddresses = [
  {
    _id: "1",
    name: "Pooja Tomar",
    address: "Sector 10, Gandhinagar",
    city: "Gandhinagar",
    state: "Gujarat",
    pincode: "382010",
    mobile: "9876543210",
    type: "Home",
  },
  {
    _id: "2",
    name: "Office Address",
    address: "Business Park, SG Highway",
    city: "Ahmedabad",
    state: "Gujarat",
    pincode: "380015",
    mobile: "9123456780",
    type: "Work",
  },
];

const ProfileAddress = () => {
  return (
    <div>

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 tracking-tight">
          My Addresses
        </h2>

        <button
          className="
            px-5 py-2
            text-sm font-medium
            rounded-lg
            bg-gradient-to-r from-violet-600 to-indigo-600
            text-white
            shadow-sm
            hover:shadow-md
            hover:scale-[1.02]
            transition-all duration-200
          "
        >
          + Add Address
        </button>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid md:grid-cols-2 gap-7">

        {dummyAddresses.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{
              y: -4,
              boxShadow: "0 18px 45px -18px rgba(124,58,237,0.25)"
            }}
            transition={{ duration: 0.2 }}
            className="
              bg-white
              rounded-2xl
              p-6
              border border-gray-100
              transition-all
            "
          >

            {/* Type Badge */}
            <span
              className="
                inline-block
                text-[11px]
                font-semibold
                px-3 py-1
                bg-violet-100
                text-violet-700
                rounded-full
                mb-5
                tracking-wide
              "
            >
              {item.type}
            </span>

            {/* Name */}
            <h3 className="font-semibold text-base text-gray-900 mb-2">
              {item.name}
            </h3>

            {/* Address */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.address}, {item.city}, {item.state} - {item.pincode}
            </p>

            {/* Phone */}
            <p className="mt-3 text-sm text-gray-700">
              <span className="text-gray-500">Mobile:</span> {item.mobile}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-100 my-5" />

            {/* Actions */}
            <div className="flex gap-8 text-sm font-medium">
              <button className="text-violet-600 hover:text-violet-700 transition-colors">
                Edit
              </button>
              <button className="text-red-500 hover:text-red-600 transition-colors">
                Delete
              </button>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default ProfileAddress;
