import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaHome } from "react-icons/fa";
import { fetchAddressRequest } from "../Redux/actions/addressAction";
import { useNavigate } from "react-router-dom"; // navigation to payment page

const Address = () => {
  const { addressList } = useSelector((state) => state.addressList);

  // stores the currently selected address id
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  // Fetch all addresses of logged-in user on page load
  useEffect(() => {
    dispatch(fetchAddressRequest());
  }, [dispatch]);

  // Auto-select first address as default when address list loads
  useEffect(() => {
    if (addressList?.length > 0) {
      setSelectedAddressId(addressList[0]._id);
    }
  }, [addressList]);

  const defaultAddress = addressList?.[0];
  const otherAddresses = addressList?.slice(1) || [];

  // Reusable action buttons (Edit / Remove)
  const ActionButtons = () => (
    <div className="flex gap-4 mt-4">
      <button className="px-6 py-2 border border-gray-800 text-gray-900 text-xs font-semibold tracking-widest uppercase rounded hover:bg-gray-100 transition">
        REMOVE
      </button>
      <button className="px-6 py-2 border border-gray-800 text-gray-900 text-xs font-semibold tracking-widest uppercase rounded hover:bg-gray-100 transition">
        EDIT
      </button>
    </div>
  );

  // Handle CONTINUE button click
  // Navigates to payment page with selected address id
  const handleContinue = () => {
    if (!selectedAddressId) return;

    navigate("/payment", {
      state: {
        selectedAddressId, // freeze address for payment
      },
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="flex justify-center mt-10 px-40">
        {/* LEFT SECTION */}
        <div className="w-3/5 pr-10">
          <h2 className="text-xl font-semibold mb-5">
            Select Delivery Address
          </h2>

          {/* DEFAULT ADDRESS */}
          {defaultAddress && (
            <>
              <p className="text-gray-500 text-sm mb-2 font-medium uppercase">
                Default Address
              </p>

              <div className="border rounded-md shadow-sm mb-6">
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <input
                      type="radio"
                      name="address"
                      checked={selectedAddressId === defaultAddress._id}
                      onChange={() =>
                        setSelectedAddressId(defaultAddress._id)
                      }
                    />
                    <h3 className="font-semibold text-gray-800">
                      {defaultAddress.name}
                    </h3>
                    <span className="border text-xs text-green-700 border-green-700 rounded-full px-2 py-[1px] flex items-center gap-1">
                      <FaHome className="text-[10px]" /> HOME
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm">
                    {defaultAddress.address}, {defaultAddress.town_city},{" "}
                    {defaultAddress.state} - {defaultAddress.pin_Code}
                  </p>

                  <p className="text-gray-700 text-sm mt-2">
                    Landmark:{" "}
                    <span className="font-semibold">
                      {defaultAddress.landmark}
                    </span>
                  </p>

                  <p className="text-gray-700 text-sm mt-2">
                    Mobile:{" "}
                    <span className="font-semibold">
                      {defaultAddress.mobile}
                    </span>
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    • Cash on Delivery available
                  </p>

                  {selectedAddressId === defaultAddress._id && (
                    <ActionButtons />
                  )}
                </div>
              </div>
            </>
          )}

          {/* OTHER ADDRESSES */}
          {otherAddresses.length > 0 && (
            <>
              <p className="text-gray-500 text-sm mb-2 font-medium uppercase">
                Other Addresses
              </p>

              {otherAddresses.map((item) => (
                <div
                  className="border rounded-md shadow-sm mb-6"
                  key={item._id}
                >
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <input
                        type="radio"
                        name="address"
                        checked={selectedAddressId === item._id}
                        onChange={() => setSelectedAddressId(item._id)}
                      />
                      <h3 className="font-semibold text-gray-800">
                        {item.name}
                      </h3>
                    </div>

                    <p className="text-gray-600 text-sm">
                      {item.address}, {item.town_city},{" "}
                      {item.state} - {item.pin_Code}
                    </p>

                    <p className="text-gray-700 text-sm mt-2">
                      Landmark:{" "}
                      <span className="font-semibold">
                        {item.landmark}
                      </span>
                    </p>

                    <p className="text-gray-700 text-sm mt-2">
                      Mobile:{" "}
                      <span className="font-semibold">
                        {item.mobile}
                      </span>
                    </p>

                    {selectedAddressId === item._id && <ActionButtons />}
                  </div>
                </div>
              ))}
            </>
          )}

          {/* ADD NEW ADDRESS */}
          <button className="border border-gray-800 text-gray-900 rounded px-6 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-gray-100">
            ADD NEW ADDRESS
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-2/5 border-l pl-10">
          <h3 className="font-semibold text-gray-800 mb-4">
            DELIVERY ESTIMATES
          </h3>

          {/* Continue button triggers payment flow */}
          <button
            className={`mt-6 w-full py-3 rounded font-semibold transition
              ${
                selectedAddressId
                  ? "bg-pink-600 text-white hover:bg-pink-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            disabled={!selectedAddressId}
            onClick={handleContinue}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
