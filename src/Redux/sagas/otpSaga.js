import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "../../api/apiClient";
import { verifyOtpSuccess, verifyOtpFail } from "../actions/otpverifyActions";
import { VERIFY_OTP_REQUEST } from "../actions/types";

function* verifyOtpSaga(action) {
  try {
    // ✅ Retrieve email saved after signup
    const email =
      localStorage.getItem("userEmail") || localStorage.getItem("tempEmail");

    if (!email) {
      throw new Error("Email missing in localStorage");
    }

    // ✅ Combine email + otp before sending
    const payload = {
      email,
      otp: action.payload.otp, // your entered OTP
    };

    // ✅ Call API with both fields
    const response = yield call(axios.post, "/otp/verify-otp", payload);

    yield put(verifyOtpSuccess(response.data));

    alert("✅ OTP verified successfully! Please log in.");

    // ✅ Clean up after verification
    localStorage.removeItem("userEmail");
    localStorage.removeItem("tempEmail");
  } catch (error) {
    const message = error.response?.data?.message || error.message || "OTP not verified";
    yield put(verifyOtpFail(message));
    alert(message);
  }
}

function* watchOtpSaga() {
  yield all([takeLatest(VERIFY_OTP_REQUEST, verifyOtpSaga)]);
}

export default watchOtpSaga;
