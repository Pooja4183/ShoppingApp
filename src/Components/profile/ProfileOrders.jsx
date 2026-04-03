import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { fetchOrderListRequest } from "../../Redux/orderList/orderListActions";
import { useNavigate } from "react-router-dom";

const ProfileOrders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { orders, loading, error } = useSelector((state) => state.orderList);

  useEffect(() => {
    dispatch(fetchOrderListRequest());
  }, [dispatch]);

  /* ================= ACTIONS BASED ON STATUS ================= */
  const renderActions = (status) => {
    switch (status) {
      case "PENDING":
      case "PROCESSING":
        return (
          <button className="border px-3 py-1 text-xs rounded-md hover:bg-gray-50">
            Cancel Order
          </button>
        );

      case "SHIPPED":
      case "OUT_FOR_DELIVERY":
        return (
          <button className="border px-3 py-1 text-xs rounded-md hover:bg-gray-50">
            Track Order
          </button>
        );

      case "DELIVERED":
        return (
          <>
            <button className="border px-3 py-1 text-xs rounded-md hover:bg-gray-50">
              Style Exchange
            </button>

            <button className="border px-3 py-1 text-xs rounded-md hover:bg-gray-50">
              Size Exchange
            </button>

            <button className="border px-3 py-1 text-xs rounded-md hover:bg-gray-50">
              Return
            </button>

            <button className="border px-3 py-1 text-xs rounded-md hover:bg-gray-50">
              Rate Product
            </button>
          </>
        );

      case "CANCELLED":
        return <p className="text-xs text-red-500">This order was cancelled</p>;

      default:
        return null;
    }
  };

  /* ================= LOADING ================= */
  if (loading)
    return (
      <div className="flex justify-center py-16">
        {" "}
        <div className="animate-pulse text-gray-500">
          Loading your orders...{" "}
        </div>{" "}
      </div>
    );

  /* ================= ERROR ================= */
  if (error)
    return (
      <div className="text-center py-16 text-red-500">
        Something went wrong while fetching orders.{" "}
      </div>
    );

  /* ================= EMPTY ================= */
  if (!orders?.length)
    return (
      <div className="text-center py-20">
        {" "}
        <h3 className="text-lg font-semibold text-gray-700">
          No Orders Yet{" "}
        </h3>{" "}
        <p className="text-gray-500 mt-2">
          Looks like you haven’t placed any orders.{" "}
        </p>{" "}
      </div>
    );

  return (
    <div>
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-semibold mb-6">My Orders</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <motion.div
            key={order._id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow border border-gray-100 p-6"
          >
            {/* Order Header */}
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-xs text-gray-500">Order ID</p>
                <p className="text-sm font-medium text-gray-800">{order._id}</p>
              </div>

              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  order.status === "CANCELLED"
                    ? "bg-red-50 text-red-600"
                    : order.status === "PENDING"
                      ? "bg-yellow-50 text-yellow-600"
                      : order.status === "SHIPPED" ||
                          order.status === "OUT_FOR_DELIVERY"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-green-50 text-green-600"
                }`}
              >
                {order.status}
              </span>
            </div>

            {/* Items */}
            <div className="space-y-4">
              {order.items?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/order/${order._id}`)}
                  className="flex gap-4 border border-gray-100
                  bg-white rounded-xl shadow p-6 cursor-pointer hover:shadow-md transition"
                >
                  {/* Product Image */}
                  <img
                    src={item.image || "/placeholder-product.png"}
                    alt={item.title}
                    className="w-20 h-24 object-cover rounded-md"
                  />

                  {/* Product Details */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">
                      {item.brand || "Brand"}
                    </h4>

                    <p className="text-sm text-gray-600">{item.title}</p>

                    <p className="text-xs text-gray-500 mt-1">
                      Qty: {item.quantity}
                    </p>

                    <p className="text-sm font-semibold text-indigo-700 mt-1">
                      ₹{item.price}
                    </p>

                    {/* Dynamic Actions */}
                    <div className="flex gap-3 mt-3 flex-wrap">
                      {renderActions(order.status)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 mt-4 pt-3 text-sm text-gray-500">
              Total Items: {order.items?.length}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProfileOrders;
