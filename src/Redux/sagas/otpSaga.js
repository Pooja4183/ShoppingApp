import { call, put, takeLatest, all } from "redux-saga/effects";
import axios from "../../api/apiClient";
import { verifyOtpSuccess, verifyOtpFail } from "../actions/otpverifyActions";
import { VERIFY_OTP_REQUEST } from "../actions/types";

// Login worker
function* verifyOtpSaga(action) {
  try {
    const response = yield call(axios.post, "/otp/verify-otp", action.payload);

    yield put(verifyOtpSuccess(response.data));

    // Show success message here (only after API confirms)
    alert("OTP verified successfully, please log in.");

    // Clear stored temp email since it's no longer needed
    localStorage.removeItem("tempEmail");
  } catch (error) {
    const message = error.response?.data?.message || "Otp not verified";
    yield put(verifyOtpFail(message));
  }
}

// Watcher saga
function* watchOtpSaga() {
  yield all([takeLatest(VERIFY_OTP_REQUEST, verifyOtpSaga)]);
}

export default watchOtpSaga;
