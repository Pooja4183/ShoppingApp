import axiosInstance from "../api/apiClient";

const createRazporPayOrderApi = async (payload) => {
  const response = await axiosInstance.post(
    "/payment/create-razorpay-order",
    payload
  );
  console.log("from payemnt page:", response);
  return response.data;
};

export default createRazporPayOrderApi;
