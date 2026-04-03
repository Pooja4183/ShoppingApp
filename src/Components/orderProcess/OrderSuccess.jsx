import { CheckCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderListRequest } from "../../Redux/orderList/orderListActions";

const OrderSuccess = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { orders, loading, error } = useSelector((state) => state.orderList);

  const order = orders?.find((orderItem) => orderItem._id === orderId);

  useEffect(() => {
    if (orderId) {
      dispatch(fetchOrderListRequest(orderId));
    }
  }, [dispatch, orderId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading order...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Error loading order
      </div>
    );
  }

  if (!order) {
    return <div className="text-white text-center mt-10">Order not found</div>;
  }

  // redirect to home page after order plaed successfull page

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* LEFT SECTION */}
        <div className="p-10 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-4">
            <CheckCircle className="text-emerald-500 w-14 h-14" />
            <h1 className="text-3xl font-semibold text-slate-900">
              Thank you for your order
            </h1>
          </div>

          <p className="text-slate-600 text-lg">
            Order confirmed,{" "}
            <span className="font-medium">{order.customer}</span>. Your payment
            was successful.
          </p>

          <div className="bg-slate-100 rounded-xl p-5">
            <p className="text-sm text-slate-500">Order ID</p>
            <p className="font-medium text-slate-800">{order.orderId}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* Track Order */}
            <button
              onClick={() => navigate(`/profile/order/${order._id}`)}
              className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 transition"
            >
              Track Order
            </button>

            {/* Continue Shopping */}
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-lg font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-slate-50 p-8">
          <h2 className="text-lg font-semibold mb-6 text-slate-900">
            Order Summary
          </h2>

          <div className="space-y-5">
            {order.items?.map((item) => (
              <div key={item._id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <p className="font-medium text-slate-800">{item.name}</p>
                  <p className="text-sm text-slate-500">₹ {item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-4 flex justify-between text-lg font-semibold text-slate-900">
            <span>Total</span>
            <span>₹ {order.totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
