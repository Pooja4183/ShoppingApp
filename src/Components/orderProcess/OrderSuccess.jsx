import { CheckCircle } from "lucide-react";
import {  useParams } from "react-router-dom";

const OrderSuccess = () => {
  const {orderId} = useParams();

  const order = {
    customer: "Pooja",
    orderId: "ORD-90231",
    total: 409,
    items: [
      {
        id: 1,
        name: "Wireless Headphone",
        price: 2250,
        image:
          "https://images.unsplash.com/photo-1585386959984-a41552231692?q=80&w=400",
      },
      {
        id: 2,
        name: "Desk Lamp",
        price: 3250,
        image:
          "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=400",
      },
      {
        id: 3,
        name: "Chair",
        price: 6050,
        image:
          "https://images.unsplash.com/photo-1582582494700-3e7fd6b4f8b4?q=80&w=400",
      },
    ],
  };

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
            <p className="text-sm text-slate-500">{orderId}</p>
            <p className="font-medium text-slate-800">{order.orderId}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 to-orange-400 hover:opacity-90 transition">
              Track Order
            </button>

            <button className="px-6 py-3 rounded-lg font-medium border border-slate-300 text-slate-700 hover:bg-slate-100 transition">
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
            {order.items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <p className="font-medium text-slate-800">{item.name}</p>
                  <p className="text-sm text-slate-500">
                    ₹ {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-6 pt-4 flex justify-between text-lg font-semibold text-slate-900">
            <span>Total</span>
            <span>₹ {order.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
