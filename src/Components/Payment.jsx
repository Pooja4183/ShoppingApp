import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/apiClient";

const Payment = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const selectedAddressId = state?.selectedAddressId;

    const cartItems = useSelector((state) => state.cart.cartProduct);
    const user = useSelector((state) => state.auth.user);

    // Prevent direct access without address

    useEffect(() => {
        if (!selectedAddressId) {
            navigate("/address");
        }
    }, [selectedAddressId, navigate]);

    const handlePayment = async () => {
        try {
            // ask backend to create Razorpay payment order
            const { data } = await axios.post(
                "/payments/create-order",
                { addressId: selectedAddressId },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                }
            );

            // 2. Open Razorpay checkout
            const razorpay = new window.Razorpay({
                key: data.key,
                order_id: data.razorpayOrderId,
                amount: data.amount,
                currency: data.currency,
                name: "name of the website",
                decription: "Order Payment",

                handler: async (response) => {
                    try {
                        // verify payment
                        const verify = await axios.post("/payments/verify", response, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                        });

                        verify.data.success
                            ? navigate("/order-success")
                            : navigate("/payment-failed");
                    } catch {
                        navigate("/payment-failed");
                    }
                },

                prefill: {
                    name: user?.name,
                    email: user?.email,
                    contact: user?.mobile,
                },
                theme: { color: "#ec4899" },
            });
            razorpay.open();
        } catch (error) {
            navigate("/payment-failed");
        }
    };

    return (
        <div className="min-h-screen bg-[#f6f7fb] flex justify-center py-10">
            <div className="w-full max-w-5xl flex gap-8">
                {/* LEFT: PAYMENT METHODS */}
                <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-6 text-gray-900">
                        Choose Payment Method
                    </h2>

                    {/* Payment options */}
                    <div className="space-y-4">
                        {/* UPI */}
                        <div
                            className="
              border border-gray-200 rounded-lg p-4
              flex items-center justify-between
              cursor-pointer transition
              hover:border-gray-900 hover:shadow-sm
            "
                        >
                            <div>
                                <p className="font-medium text-gray-800">UPI</p>
                                <p className="text-sm text-gray-500">
                                    Google Pay, PhonePe, Paytm, BHIM
                                </p>
                            </div>
                            <input type="radio" checked readOnly />
                        </div>

                        {/* Card */}
                        <div
                            className="
              border border-gray-200 rounded-lg p-4
              flex items-center justify-between
              cursor-pointer transition
              hover:border-gray-900 hover:shadow-sm
            "
                        >
                            <div>
                                <p className="font-medium text-gray-800">Credit / Debit Card</p>
                                <p className="text-sm text-gray-500">Visa, MasterCard, RuPay</p>
                            </div>
                            <input type="radio" />
                        </div>

                        {/* Net Banking */}
                        <div
                            className="
              border border-gray-200 rounded-lg p-4
              flex items-center justify-between
              cursor-pointer transition
              hover:border-gray-900 hover:shadow-sm
            "
                        >
                            <div>
                                <p className="font-medium text-gray-800">Net Banking</p>
                                <p className="text-sm text-gray-500">
                                    All major banks supported
                                </p>
                            </div>
                            <input type="radio" />
                        </div>

                        {/* Wallet */}
                        <div
                            className="
              border border-gray-200 rounded-lg p-4
              flex items-center justify-between
              cursor-pointer transition
              hover:border-gray-900 hover:shadow-sm
            "
                        >
                            <div>
                                <p className="font-medium text-gray-800">Wallet</p>
                                <p className="text-sm text-gray-500">
                                    Paytm, Mobikwik, Freecharge
                                </p>
                            </div>
                            <input type="radio" />
                        </div>
                    </div>
                </div>

                {/* RIGHT: ORDER SUMMARY */}
                <div className="w-[360px] bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900">
                        Order Summary
                    </h3>

                    <div className="text-sm text-gray-600 space-y-2 border-b pb-4">
                        <div className="flex justify-between">
                            <span>Total Items</span>
                            <span>{cartItems?.length || 0}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Delivery</span>
                            <span className="text-green-600 font-medium">FREE</span>
                        </div>
                    </div>

                    <div className="flex justify-between font-semibold text-gray-900 mt-4">
                        <span>Total Payable</span>
                        <span className="text-gray-700">Calculated at payment</span>
                    </div>

                    {/* Modern Pay Button */}
                    <button
                        onClick={handlePayment}
                        className="
             

    mt-4 w-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-orange-400 hover:opacity-90 text-white py-2 rounded-sm font-medium text-sm tracking-wide shadow-md transition-all duration-200
          "
                    >
                        PAY SECURELY
                    </button>

                    <p className="text-xs text-gray-500 mt-3 text-center">
                        100% Secure Payments powered by Razorpay
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Payment;
