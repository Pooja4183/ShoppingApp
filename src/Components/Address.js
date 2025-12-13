import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductRequest } from "../Redux/actions/productFetchActions";
import { FaHome } from "react-icons/fa";


const Address = () => {
  const { products } = useSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductRequest());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
     

      <div className="flex justify-center mt-10 px-40">
        {/* LEFT SECTION */}
        <div className="w-3/5 pr-10">
          <h2 className="text-xl font-semibold mb-5">Select Delivery Address</h2>

          {/* Default Address */}
          <p className="text-gray-500 text-sm mb-2 font-medium uppercase">
            Default Address
          </p>

          <div className="border rounded-md shadow-sm mb-6">
            <div className="p-5 flex justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <input type="radio" name="address" defaultChecked />
                  <h3 className="font-semibold text-gray-800">Pooja Tomar</h3>
                  <span className="border text-xs text-green-700 border-green-700 rounded-full px-2 py-[1px] flex items-center gap-1">
                    <FaHome className="text-[10px]" /> HOME
                  </span>
                </div>

                <p className="text-gray-600 text-sm">
                  205, C block, Vrindavan residency 2, Sargasan <br />
                  Gandhinagar, Gujarat - 382421
                </p>

                <p className="text-gray-700 text-sm mt-2">
                  Mobile: <span className="font-semibold">9873991392</span>
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  • Cash on Delivery available
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button className="border rounded px-4 py-1 text-sm font-medium hover:bg-gray-50">
                  REMOVE
                </button>
                <button className="border rounded px-4 py-1 text-sm font-medium hover:bg-gray-50">
                  EDIT
                </button>
              </div>
            </div>
          </div>

          {/* Button to Add New Address */}
          <button className="border border-pink-600 text-pink-600 rounded-md px-5 py-2 font-semibold hover:bg-pink-50">
            + ADD NEW ADDRESS
          </button>

          {/* Later you can map other addresses here */}
          {/* {addresses.map(address => (
              <AddressCard key={address._id} data={address} />
          ))} */}
        </div>

        {/* RIGHT SECTION */}
        <div className="w-2/5 border-l pl-10">
          <h3 className="font-semibold text-gray-800 mb-4">DELIVERY ESTIMATES</h3>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-20 bg-gray-100 rounded-md"></div>
            <p className="text-sm text-gray-700">
              Delivery between <span className="font-semibold">15 Dec - 17 Dec</span>
            </p>
          </div>

          <h3 className="font-semibold text-gray-800 mt-6 mb-3">
            PRICE DETAILS (2 Items)
          </h3>
          <div className="text-sm text-gray-700">
            <div className="flex justify-between py-1">
              <p>Total MRP</p>
              <p>₹11,098</p>
            </div>
            <div className="flex justify-between py-1 text-green-600">
              <p>Discount on MRP</p>
              <p>- ₹7,165</p>
            </div>
            <div className="flex justify-between py-1">
              <p>Platform Fee</p>
              <p>₹23</p>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between font-semibold text-gray-900">
              <p>Total Amount</p>
              <p>₹3,956</p>
            </div>
          </div>

          <button className="mt-6 w-full bg-pink-600 text-white font-semibold py-3 rounded hover:bg-pink-700 transition">
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;
