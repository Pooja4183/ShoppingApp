import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/order/${orderId}`,

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );
        console.log("ORDER RESPONSE:", data);
        setOrder(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Order Details</h2>
        <p className="text-sm text-gray-500">Order ID: {order?._id}</p>
      </div>

      {/* STATUS */}
      <div className="mb-6">
        <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
          {order?.status}
        </span>
      </div>

      {/* ITEMS */}
      <div className="bg-white rounded-xl shadow p-4 space-y-4">
        {order?.items?.map((item, index) => (
          <div key={index} className="flex gap-4 border-b pb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-28 object-cover rounded-md"
            />

            <div className="flex-1">
              <h4 className="font-semibold">{item.title}</h4>

              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>

              <p className="text-indigo-600 font-semibold">₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* PRICE SUMMARY */}
      <div className="mt-6 bg-gray-50 p-4 rounded-xl">
        <h3 className="font-semibold mb-2">Price Details</h3>

        <div className="flex justify-between text-sm">
          <span>Total Amount</span>
          <span className="font-semibold">₹{order?.totalAmount}</span>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Delivery Address</h3>
        <p className="text-sm text-gray-600">
          {order?.addressId?.fullAddress || "Address not available"}
        </p>
      </div>
    </div>
  );
};

export default OrderDetail;
