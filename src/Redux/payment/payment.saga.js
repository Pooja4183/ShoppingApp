import { paymentSuccess, paymentFailed } from "./payment.actions";
import { INITIATE_PAYMENT } from "./payment.types";
import  createRazporPayOrderApi  from "../../service/paymentApi";
import { takeLatest, put, call, select } from "redux-saga/effects";
import { openRazorpayCheckout } from "../../config/razorpayClient";

function* paymentSaga(action) {
  try {
    const response = yield call(createRazporPayOrderApi, action.payload);
    console.log("response from razporpay payment creation:", response)

    const user = yield select((state)=>state.auth.user);
    console.log("Opening Razor Pay");
    yield call(openRazorpayCheckout,{
      key:response.key,
      razorpayOrderId:response.data.id,
      amount:response.data.amount,
      user,
      orderId: response.data.receipt
    });
    console.log("Iniitating Payment Success:")
    yield put(paymentSuccess(response));
    console.log("Payment marked success")
  } catch (error) {

    yield put(paymentFailed(error.message || "Payment failed"));
  }
};

function* paymentWatcherSaga() {
    yield takeLatest(INITIATE_PAYMENT,paymentSaga);
};

export default paymentWatcherSaga;
